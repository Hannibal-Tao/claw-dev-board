import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { boardService, Board, Column, Ticket } from '../api/boardService';
import { ticketService } from '../api/ticketService';
import './KanbanBoard.css';

const KanbanBoard: React.FC = () => {
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState<number | null>(null); // columnId
  const [newTicketTitle, setNewTicketTitle] = useState('');

  useEffect(() => {
    fetchBoard();
  }, []);

  const fetchBoard = async () => {
    try {
      const data = await boardService.getBoard(1);
      setBoard(data);
    } catch (error) {
      console.error('Failed to fetch board:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTicket = async (columnId: number) => {
    if (!newTicketTitle.trim()) return;
    try {
      await ticketService.createTicket({
        title: newTicketTitle,
        columnId,
        order: 0, // Should be calculated or handled by BE
      });
      setNewTicketTitle('');
      setIsAdding(null);
      fetchBoard();
    } catch (error) {
      console.error('Failed to create ticket:', error);
    }
  };

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (!board) return;

    const sourceColIndex = board.columns.findIndex(c => c.id.toString() === source.droppableId);
    const destColIndex = board.columns.findIndex(c => c.id.toString() === destination.droppableId);
    
    if (sourceColIndex === -1 || destColIndex === -1) return;

    const sourceCol = board.columns[sourceColIndex];
    const destCol = board.columns[destColIndex];
    const sourceTickets = Array.from(sourceCol.tickets);
    const [movedTicket] = sourceTickets.splice(source.index, 1);

    // Optimistic UI update
    const newBoard = { ...board };
    if (sourceColIndex === destColIndex) {
      sourceTickets.splice(destination.index, 0, movedTicket);
      newBoard.columns[sourceColIndex].tickets = sourceTickets;
    } else {
      const destTickets = Array.from(destCol.tickets);
      destTickets.splice(destination.index, 0, movedTicket);
      newBoard.columns[sourceColIndex].tickets = sourceTickets;
      newBoard.columns[destColIndex].tickets = destTickets;
    }
    setBoard(newBoard);

    // Sync with backend
    try {
      await ticketService.updateTicket(Number(draggableId), {
        columnId: Number(destination.droppableId),
        order: destination.index,
      });
    } catch (error) {
      console.error('Failed to update ticket position:', error);
      fetchBoard(); // Revert on failure
    }
  };

  if (loading) return <div>Loading board...</div>;
  if (!board) return <div>No board found. Create one to get started.</div>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-container">
        {board.columns.map((column) => (
          <Droppable droppableId={column.id.toString()} key={column.id}>
            {(provided) => (
              <div
                className="board-column"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className="column-header">
                  <h4>{column.name}</h4>
                  <span className="task-count">{column.tickets.length}</span>
                </div>
                <div className="column-content">
                  {column.tickets.map((ticket, index) => (
                    <Draggable
                      draggableId={ticket.id.toString()}
                      index={index}
                      key={ticket.id}
                    >
                      {(provided) => (
                        <div
                          className="task-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h5>{ticket.title}</h5>
                          <p>{ticket.desc}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  
                  {isAdding === column.id ? (
                    <div className="add-ticket-form">
                      <textarea
                        autoFocus
                        placeholder="What needs to be done?"
                        value={newTicketTitle}
                        onChange={(e) => setNewTicketTitle(e.target.value)}
                        onBlur={() => handleAddTicket(column.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddTicket(column.id);
                          if (e.key === 'Escape') setIsAdding(null);
                        }}
                      />
                    </div>
                  ) : (
                    <button
                      className="add-ticket-btn"
                      onClick={() => setIsAdding(column.id)}
                    >
                      + Add a card
                    </button>
                  )}

                  {column.tickets.length === 0 && !isAdding && (
                    <div className="empty-column-message">No tasks</div>
                  )}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;

import React, { useState } from 'react';
import './KanbanBoard.css';

interface Task {
  id: string;
  title: string;
  description: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialData: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 't1', title: 'Setup Repo', description: 'Initialize git repository' },
      { id: 't2', title: 'Scaffold Frontend', description: 'Use Vite to create React app' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      { id: 't3', title: 'Implement Board', description: 'Create board component' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [],
  },
];

const KanbanBoard: React.FC = () => {
  const [columns] = useState<Column[]>(initialData);

  return (
    <div className="board-container">
      {columns.map((column) => (
        <div key={column.id} className="board-column">
          <div className="column-header">
            <h4>{column.title}</h4>
            <span className="task-count">{column.tasks.length}</span>
          </div>
          <div className="column-content">
            {column.tasks.map((task) => (
              <div key={task.id} className="task-card">
                <h5>{task.title}</h5>
                <p>{task.description}</p>
              </div>
            ))}
            {column.tasks.length === 0 && (
              <div className="empty-column-message">No tasks</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;

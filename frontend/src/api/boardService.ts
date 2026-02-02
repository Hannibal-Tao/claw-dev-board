import client from './client';

export interface Ticket {
  id: number;
  title: string;
  desc?: string;
  order: number;
  columnId: number;
  assigneeId?: number;
}

export interface Column {
  id: number;
  name: string;
  order: number;
  boardId: number;
  tickets: Ticket[];
}

export interface Board {
  id: number;
  name: string;
  columns: Column[];
}

export const boardService = {
  getBoard: async (id: number): Promise<Board> => {
    const response = await client.get(`/boards/${id}`);
    return response.data;
  },
  createBoard: async (name: string): Promise<Board> => {
    const response = await client.post('/boards', { name });
    return response.data;
  },
};

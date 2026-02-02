import client from './client';
import { Ticket } from './boardService';

export const ticketService = {
  createTicket: async (data: Partial<Ticket>): Promise<Ticket> => {
    const response = await client.post('/tickets', data);
    return response.data;
  },
  updateTicket: async (id: number, data: Partial<Ticket>): Promise<Ticket> => {
    const response = await client.patch(`/tickets/${id}`, data);
    return response.data;
  },
  deleteTicket: async (id: number): Promise<void> => {
    await client.delete(`/tickets/${id}`);
  },
};

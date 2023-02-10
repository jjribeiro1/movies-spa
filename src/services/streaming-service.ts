import { api } from '../api';
import {
  CreateStreamingInput,
  Streaming,
  UpdateStreamingInput,
} from '../types/streaming-service-types';

export function StreamingService() {
  async function create({ name, price }: CreateStreamingInput) {
    const request = await api.post<Streaming>('/streaming', { name, price });
    return request.data;
  }

  async function getAll() {
    const request = await api.get<Streaming[]>('/streaming');
    return request.data;
  }

  async function update({ id, name, price }: UpdateStreamingInput) {
    const request = await api.patch<Streaming>(`streaming/${id}`, { name, price });
    return request.data;
  }

  async function remove(id: string) {
    const request = await api.delete(`streaming/${id}`);
    return request.data;
  }

  return {
    create,
    getAll,
    update,
    remove,
  };
}

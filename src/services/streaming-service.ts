import { api } from '../api';
import { CreateStreamingInput, Streaming } from '../types/streaming-service-types';

export function StreamingService() {
  async function create({ name, price }: CreateStreamingInput) {
    const request = await api.post<Streaming>('/streaming', { name, price });
    return request.data;
  }

  async function getAll() {
    const request = await api.get<Streaming[]>('/streaming');
    return request.data;
  }

  return {
    create,
    getAll,
  };
}

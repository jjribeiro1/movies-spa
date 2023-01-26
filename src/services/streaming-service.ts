import { api } from '../api';
import { CreateStreamingInput, Streaming } from '../types/streaming-service-types';

const makeStreamingService = () => ({
  async create({ name, price }: CreateStreamingInput) {
    const request = await api.post<Streaming>('/streaming', { name, price });
    return request.data;
  },

  async getAll() {
    const request = await api.get<Streaming[]>('/streaming');
    return request.data;
  },
});

export const StreamingService = makeStreamingService();

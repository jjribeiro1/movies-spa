import { api } from '../api';
import { CreateGenreInput, Genre } from '../types/genre-service-types';

const makeGenreService = () => ({
  async create({ name }: CreateGenreInput) {
    const request = await api.post<Genre>('/genre', { name });
    return request.data;
  },
});

export const GenreService = makeGenreService();

import { api } from '../api';
import { CreateGenreInput, Genre } from '../types/genre-service-types';

export function GenreService() {
  async function create({ name }: CreateGenreInput) {
    const request = await api.post<Genre>('/genre', { name });
    return request.data;
  }

  async function getAll() {
    const request = await api.get<Genre[]>('/genre');
    return request.data;
  }

  return {
    create,
    getAll,
  };
}

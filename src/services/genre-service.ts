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

  async function update(id: string, name: string) {
    const request = await api.patch<Genre[]>(`/genre/${id}`, { name });
    return request.data;
  }

  async function remove(id: string) {
    const request = await api.delete(`/genre/${id}`);
    return request.data;
  }

  return {
    create,
    getAll,
    update,
    remove,
  };
}

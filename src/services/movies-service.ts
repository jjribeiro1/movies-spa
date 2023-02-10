import { api } from '../api';
import { Movie, CreateMovieInput, UpdateMovieInput } from '../types/movie-service-types';

export function MovieService() {
  async function create({
    name,
    imageUrl,
    ageRating,
    releaseYear,
    genreIds,
    streamingIds,
  }: CreateMovieInput) {
    const request = await api.post<Movie>('/movie', {
      name,
      imageUrl,
      ageRating,
      releaseYear,
      genreIds,
      streamingIds,
    });
    return request.data;
  }

  async function getAll() {
    const request = await api.get<Movie[]>('/movie');
    return request.data;
  }

  async function update({
    id,
    name,
    imageUrl,
    ageRating,
    releaseYear,
    genreIds,
    streamingIds,
  }: UpdateMovieInput) {
    const request = await api.patch(`/movie/${id}`, {
      name,
      imageUrl,
      ageRating,
      releaseYear,
      genreIds,
      streamingIds,
    });
    return request.data;
  }

  async function remove(id: string) {
    const request = await api.delete(`/movie/${id}`);
    return request.data;
  }

  return {
    create,
    getAll,
    update,
    remove,
  };
}

import { api } from '../api';
import { Movie, CreateMovieInput } from '../types/movie-service-types';

const makeMovieService = () => ({
  async create({
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
  },

  async getAll() {
    const request = await api.get<Movie[]>('/movie');
    return request.data;
  },
});

export const MovieService = makeMovieService();

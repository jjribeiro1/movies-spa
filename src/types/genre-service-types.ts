import { Movie } from "./movie-service-types";

export type Genre = {
  id: string;
  name: string;
  movies?: Movie[];
};

export type CreateGenreInput = {
  name: string;
};

export type UpdateGenreInput = {
  id: string;
  name: string;
};

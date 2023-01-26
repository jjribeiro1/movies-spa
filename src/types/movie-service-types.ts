import { Genre } from "./genre-service-types";
import { Streaming } from "./streaming-service-types";

export type Movie = {
  id: string;
  name: string;
  imageUrl: string;
  releaseYear: number;
  ageRating: number;
  stream: Streaming[];
  genres: Genre[];
};

export type CreateMovieInput = {
  name: string;
  imageUrl: string;
  releaseYear: number;
  ageRating: number;
  streamingIds: string[];
  genreIds: string[];
};

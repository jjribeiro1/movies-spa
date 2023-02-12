import { Movie } from "./movie-service-types";

export type Streaming = {
  id: string;
  name: string;
  price: number
  movies?: Movie[];
};

export type CreateStreamingInput = {
  name: string;
  price: number;
}

export type UpdateStreamingInput = {
  id: string;
  name: string;
  price: number;
}

export type Streaming = {
  id: string;
  name: string;
  price: number
  movies?: any[];
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

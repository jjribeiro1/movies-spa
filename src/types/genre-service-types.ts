export type Genre = {
  id: string;
  name: string;
  movies?: any[];
};

export type CreateGenreInput = {
  name: string;
}
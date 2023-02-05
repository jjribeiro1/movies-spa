export type CreateProfileInput = {
  name: string;
  imageUrl: string;
};

export type UpdateProfileInput = {
  id: string;
  name: string;
  imageUrl: string;
};

export type Profile = {
  id: string;
  name: string;
  imageUrl: string;
  favoriteMoviesOnProfile: any[];
};

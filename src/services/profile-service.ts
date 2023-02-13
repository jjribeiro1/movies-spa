import { api } from '../api';
import { LocalStorageHelper } from '../helper/local-storage';
import { CreateProfileInput, Profile, UpdateProfileInput } from '../types/profile-service-types';

export function ProfileService() {
  const userId = LocalStorageHelper.getItem('logged_user').id;
  const selectedProfileByUserId = LocalStorageHelper.getItem('selected_profile');

  async function create({ name, imageUrl }: CreateProfileInput) {
    const request = await api.post('/profile', { name, imageUrl, userId });
    return request.data;
  }

  async function update({ id, name, imageUrl }: UpdateProfileInput) {
    const request = await api.patch(`/profile/${id}`, { name, imageUrl });
    return request.data;
  }

  async function remove(id: string) {
    const request = await api.delete(`/profile/${id}`);
    return request.data;
  }

  async function addMovieToFavorites(movieId: string) {
    const request = await api.post(`/profile/add-favorite`, {
      profileId: selectedProfileByUserId,
      movieId,
    });
    return request.data;
  }

  async function removeMovieFromFavorites(movieId: string) {
    const request = await api.post(`/profile/remove-favorite`, {
      profileId: selectedProfileByUserId,
      movieId,
    });
    return request.data;
  }

  async function findFavoriteMoviesFromProfile() {
    const request = await api.get<Profile>(`/profile/${selectedProfileByUserId}`);
    return request.data.favoriteMoviesOnProfile;
  }

  return {
    create,
    update,
    remove,
    addMovieToFavorites,
    removeMovieFromFavorites,
    findFavoriteMoviesFromProfile,
  };
}

import { api } from '../api';
import { LocalStorageHelper } from '../helper/local-storage';
import { CreateProfileInput, UpdateProfileInput } from '../types/profile-service-types';

export function ProfileService() {
  const userId = LocalStorageHelper.getItem('logged_user').id;

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

  return {
    create,
    update,
    remove,
  };
}

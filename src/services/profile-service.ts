import { api } from '../api';
import { LocalStorageHelper } from '../helper/local-storage';
import { CreateProfileInput } from '../types/profile-service-types';

const makeProfileService = () => {
  const userId = LocalStorageHelper.getItem('logged_user').id;

  async function create({ name, imageUrl }: CreateProfileInput) {
    const request = await api.post('/profile', { name, imageUrl, userId });
    return request.data;
  }

  return {
    create,
  };
};

export const ProfileService = makeProfileService();

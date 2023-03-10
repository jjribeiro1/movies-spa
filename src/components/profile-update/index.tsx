import React, { FormEvent, useState } from 'react';
import { ProfileService } from '../../services/profile-service';
import { CreateProfileInput, Profile, UpdateProfileInput } from '../../types/profile-service-types';
import { FormProfile } from '../profile-form';
import { ToastMessage } from '../radix-toast';

type UpdateProfileProps = {
  profile: Profile;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
};

export function UpdateProfile({
  profile,
  setOpenUpdateModal,
  control,
  setControl,
}: UpdateProfileProps) {
  const [toastMessage, setToastMessage] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = [];

    const data: CreateProfileInput = {
      name: e.currentTarget.Name.value,
      imageUrl: e.currentTarget.imageUrl.value,
    };

    data.name.length >= 3 ? null : error.push('Nome deve ter pelo menos 3 caracterers');

    if (error.length > 0) {
      setToastMessage(error);
      setOpenToast(true);
      return;
    }

    updateProfile({ id: profile.id, ...data });
  }

  async function updateProfile(data: UpdateProfileInput) {
    try {
      await ProfileService().update(data);
      setControl(!control);
      setOpenUpdateModal(false);
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  return (
    <>
      <FormProfile title="Editar Perfil" handleSubmit={handleSubmit} profile={profile} />
      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao atualizar perfil"
        messages={toastMessage}
      />
    </>
  );
}

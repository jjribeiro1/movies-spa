import React, { FormEvent, useState } from 'react';
import { ProfileService } from '../../services/profile-service';
import { FormProfile } from '../profile-form';
import { ToastMessage } from '../radix-toast';
import { CreateProfileInput } from '../../types/profile-service-types';

type CreateProfileProps = {
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CreateProfile({ setOpenCreateModal, control, setControl }: CreateProfileProps) {
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

    registerProfile(data);
  }

  async function registerProfile(data: CreateProfileInput) {
    try {
      await ProfileService().create(data);
      setControl(!control);
      setOpenCreateModal(false);
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  return (
    <>
      <FormProfile title="Novo Perfil" handleSubmit={handleSubmit} />
      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao criar perfil"
        messages={toastMessage}
      />
    </>
  );
}

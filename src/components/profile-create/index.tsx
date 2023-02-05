import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ProfileService } from '../../services/profile-service';
import { FormProfile } from '../profile-form';
import { ToastMessage } from '../radix-toast';

type CreateProfileProps = {
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CreateProfile({ setOpenCreateModal, control, setControl }: CreateProfileProps) {
  const [inputValues, setInputValues] = useState({
    name: '',
    imageUrl: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = [];
    const { name } = inputValues;
    const nameIsValid = name.length > 3 ? true : false;
    if (!nameIsValid) {
      error.push('Nome deve ter pelo menos 3 caracterers');
    }
    if (error.length > 0) {
      setErrors(error);
      setOpenToast(true);
      return;
    }

    registerProfile();
  }

  async function registerProfile() {
    try {
      await ProfileService().create(inputValues);
      setControl(!control);
      setOpenCreateModal(false);
    } catch (error: any) {
      if (error.response.data.message[0] === 'name must be longer than or equal to 3 characters') {
        setErrors(['Nome deve ter pelo menos 3 caracterers']);
        setOpenToast(true);
        return;
      }
      setErrors(['Erro inesperado ao criar perfil']);
      setOpenToast(true);
    }
  }

  return (
    <>
      <FormProfile title="Novo Perfil" handleChange={handleChange} handleSubmit={handleSubmit} />
      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao criar perfil"
        messages={errors}
      />
    </>
  );
}

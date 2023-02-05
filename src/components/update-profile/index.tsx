import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ProfileService } from '../../services/profile-service';
import { Profile } from '../../types/profile-service-types';
import { FormProfile } from '../form-profile';
import { ToastMessage } from '../toast';

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
    updateProfile();
  }

  async function updateProfile() {
    try {
      const name = inputValues.name === '' ? profile.name : inputValues.name;
      const imageUrl = inputValues.imageUrl === '' ? profile.imageUrl : inputValues.imageUrl;
      await ProfileService().update({ id: profile.id, name, imageUrl });
      setControl(!control);
      setOpenUpdateModal(false);
    } catch (error: any) {
      if (error.response.data.message[0] === 'name must be longer than or equal to 3 characters') {
        setErrors(['Nome deve ter pelo menos 3 caracterers']);
        setOpenToast(true);
        return;
      }
      setErrors(['Erro inesperado ao atualizar perfil']);
      setOpenToast(true);
    }
  }

  return (
    <>
      <FormProfile
        title="Editar Perfil"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        profile={profile}
      />
      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao atualizar perfil"
        messages={errors}
      />
    </>
  );
}

import React, { useState } from 'react';
import { ProfileService } from '../../services/profile-service';
import { ToastMessage } from '../toast';
import {
  AlertAction,
  AlertButtons,
  AlertCancel,
  AlertDescription,
  AlertTitle,
  ContentWrapper,
} from './style';

type DeleteProfileProps = {
  profileId: string;
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDeleteAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DeleteProfile({
  profileId,
  control,
  setControl,
  setOpenDeleteAlert,
}: DeleteProfileProps) {
  const [errors, setErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  async function removeProfile() {
    try {
      await ProfileService().remove(profileId);
      setControl(!control);
      setOpenDeleteAlert(false);
    } catch (error: any) {
      setErrors(['Um erro inesperado ocorreu, não foi possível excluir o perfil']);
      setOpenToast(true);
    }
  }

  return (
    <>
      <ContentWrapper>
        <AlertTitle>Tem certeza que deseja excluir esse perfil?</AlertTitle>
        <AlertDescription>
          Essa ação é irreversível e você perderá todos os dados do seu perfil
        </AlertDescription>
        <AlertButtons>
          <AlertCancel>Cancelar</AlertCancel>
          <AlertAction onClick={removeProfile}>Deletar</AlertAction>
        </AlertButtons>
      </ContentWrapper>

      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao excluir perfil"
        messages={errors}
      />
    </>
  );
}

import React from 'react';
import { ProfileService } from '../../services/profile-service';
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
};

export function DeleteProfile({ profileId, control, setControl }: DeleteProfileProps) {
  async function removeProfile() {
    try {
      await ProfileService().remove(profileId);
      setControl(!control);
    } catch (error: any) {
      console.log(error);
    }
  }
  return (
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
  );
}

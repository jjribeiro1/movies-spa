import { FormContainer, FormHeader, FormTitle, FormControls, SubmitButton } from './style';
import { Close } from '@radix-ui/react-dialog';
import { FormEvent } from 'react';
import { Profile } from '../../types/profile-service-types';

type FormProfileProps = {
  title: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  profile?: Profile;
};
export function FormProfile({ title, handleSubmit, profile }: FormProfileProps) {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader>
        <FormTitle>{title}</FormTitle>
        <Close>X</Close>
      </FormHeader>
      <FormControls>
        <label htmlFor="name">Nome</label>
        <input type="text" name="Name" id="name" required defaultValue={profile?.name} />
      </FormControls>

      <FormControls>
        <label htmlFor="imageUrl">Url da Imagem</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          required
          defaultValue={profile?.imageUrl}
        />
      </FormControls>
      <SubmitButton type="submit">{title === 'Novo Perfil' ? 'Cadastrar' : 'Editar'}</SubmitButton>
    </FormContainer>
  );
}

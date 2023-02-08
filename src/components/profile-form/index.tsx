import { FormContainer, FormHeader, FormTitle, FormControls, SubmitButton } from './style';
import { Close } from '@radix-ui/react-dialog';
import { ChangeEvent, FormEvent } from 'react';
import { Profile } from '../../types/profile-service-types';

type FormProfileProps = {
  title: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  profile?: Profile;
};
export function FormProfile({ title, handleChange, handleSubmit, profile }: FormProfileProps) {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader>
        <FormTitle>{title}</FormTitle>
        <Close>X</Close>
      </FormHeader>
      <FormControls>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
          defaultValue={profile?.name}
        />
      </FormControls>

      <FormControls>
        <label htmlFor="imageUrl">Url da Imagem</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          required
          onChange={handleChange}
          defaultValue={profile?.imageUrl}
        />
      </FormControls>
      <SubmitButton type="submit">{title === 'Novo Perfil' ? 'Cadastrar' : 'Editar'}</SubmitButton>
    </FormContainer>
  );
}

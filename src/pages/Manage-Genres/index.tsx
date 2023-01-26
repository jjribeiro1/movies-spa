import React, { useState } from 'react';
import { Header } from '../../components/header';
import { GenreService } from '../../services/genre-service';
import { CreateGenreInput } from '../../types/genre-service-types';
import { CreateGenreButton, CreateGenreContainer, GenreInput, ManageSection, Title } from './style';

export function ManageGenres() {
  const [inputValue, setInputValue] = useState<CreateGenreInput>({
    name: '',
  });

  async function handleSubmit() {
    try {
      await GenreService.create(inputValue);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ManageSection>
      <Header />
      <CreateGenreContainer>
        <GenreInput
          type="text"
          id="name"
          name="name"
          onChange={(e) => setInputValue({ name: e.target.value })}
        />
        <CreateGenreButton onClick={handleSubmit}>Cadastrar</CreateGenreButton>
      </CreateGenreContainer>
      <Title>Generos Cadastrados:</Title>
    </ManageSection>
  );
}

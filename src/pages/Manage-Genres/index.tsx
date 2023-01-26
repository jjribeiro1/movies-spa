import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { GenreService } from '../../services/genre-service';
import { CreateGenreInput, Genre } from '../../types/genre-service-types';
import {
  CreateGenreButton,
  CreateGenreContainer,
  GenreInput,
  GenreItem,
  GenreList,
  ManageSection,
  Title,
} from './style';

export function ManageGenres() {
  const [inputValue, setInputValue] = useState<CreateGenreInput>({
    name: '',
  });
  const [genres, setGenres] = useState<Genre[]>([]);
  const [control, setControl] = useState(false);

  async function getGenres() {
    try {
      const data = await GenreService.getAll();
      setGenres(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit() {
    try {
      await GenreService.create(inputValue);
      setControl(!control);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGenres();
  }, [control]);

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
      <GenreList>
        {genres.map((genre) => (
          <GenreItem key={genre.id}>{genre.name}</GenreItem>
        ))}
      </GenreList>
    </ManageSection>
  );
}

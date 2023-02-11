import React, { useEffect, useState } from 'react';
import {
  CloseForm,
  FormControls,
  FormContainer,
  SelectControls,
  SelectGenre,
  SelectStreaming,
  SubmitButton,
} from './style';
import { GenreService } from '../../services/genre-service';
import { StreamingService } from '../../services/streaming-service';
import { Genre } from '../../types/genre-service-types';
import { Streaming } from '../../types/streaming-service-types';
import { Movie } from '../../types/movie-service-types';

type RegisterMovieFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  movie?: Movie;
  btnText: string;
};

export function MovieForm({ onSubmit, movie, btnText }: RegisterMovieFormProps) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [streaming, setStreaming] = useState<Streaming[]>([]);

  async function getGenres() {
    const data = await GenreService().getAll();
    setGenres(data);
  }
  async function getStreaming() {
    const data = await StreamingService().getAll();
    setStreaming(data);
  }

  useEffect(() => {
    getGenres();
    getStreaming();
  }, []);

  return (
    <FormContainer onSubmit={onSubmit}>
      <CloseForm>X</CloseForm>
      <FormControls>
        <label htmlFor="name">Nome</label>
        <input type="text" name="Name" id="name" required defaultValue={movie?.name} />
      </FormControls>

      <FormControls>
        <label htmlFor="imageUrl">Url da imagem</label>
        <input type="text" name="imageUrl" id="imageUrl" required defaultValue={movie?.imageUrl} />
      </FormControls>

      <FormControls>
        <label htmlFor="releaseYear">Ano de lançamento</label>
        <input
          type="number"
          name="releaseYear"
          id="releaseYear"
          required
          defaultValue={movie?.releaseYear}
        />
      </FormControls>

      <FormControls>
        <label htmlFor="ageRating">Classificação</label>
        <input
          type="number"
          name="ageRating"
          id="ageRating"
          required
          defaultValue={movie?.ageRating}
        />
      </FormControls>

      <SelectControls>
        <label htmlFor="genreIds">Gênero</label>
        <SelectGenre name="genreIds" id="genreIds">
          {btnText === 'Cadastrar' && (
            <option value="" selected disabled hidden>
              Selecione um gênero
            </option>
          )}

          {genres.map((genre) => (
            <option
              key={genre.id}
              value={genre.id}
              selected={movie?.genres.some((genreMovie) => genre.name === genreMovie.name)}
            >
              {genre.name}
            </option>
          ))}
        </SelectGenre>
      </SelectControls>

      <SelectControls>
        <label htmlFor="streamingIds">Streaming</label>
        <SelectStreaming name="streamingIds" id="streamingIds">
          {btnText === 'Cadastrar' && (
            <option value="" selected disabled hidden>
              Selecione um streaming
            </option>
          )}
          {streaming.map((streaming) => (
            <option
              key={streaming.id}
              value={streaming.id}
              selected={movie?.stream.some(
                (movieStreaming) => streaming.name === movieStreaming.name
              )}
            >
              {streaming.name}
            </option>
          ))}
        </SelectStreaming>
      </SelectControls>

      <SubmitButton type="submit">{btnText}</SubmitButton>
    </FormContainer>
  );
}

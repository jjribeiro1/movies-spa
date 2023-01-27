import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MovieService } from '../../services/movies-service';
import { CreateMovieInput } from '../../types/movie-service-types';
import {
  FormControls,
  FormHeader,
  FormTitle,
  RegisterForm,
  SelectControls,
  SelectGenre,
  SelectStreaming,
  SubmitButton,
} from './style';
import * as Dialog from '@radix-ui/react-dialog';
import { GenreService } from '../../services/genre-service';
import { StreamingService } from '../../services/streaming-service';
import { Genre } from '../../types/genre-service-types';
import { Streaming } from '../../types/streaming-service-types';

type RegisterMovieFormProps = {
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export function RegisterMovieForm({ control, setControl, setOpenModal }: RegisterMovieFormProps) {
  const [inputValues, setInputValues] = useState({
    name: '',
    imageUrl: '',
    ageRating: '',
    releaseYear: '',
    genreIds: '',
    streamingIds: '',
  });

  const [genres, setGenres] = useState<Genre[]>([]);
  const [streaming, setStreaming] = useState<Streaming[]>([]);

  async function getGenres() {
    const data = await GenreService.getAll();
    setGenres(data);
  }
  async function getStreaming() {
    const data = await StreamingService.getAll();
    setStreaming(data);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  // function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
  //   const { name, value } = e.target;
  //   console.log({ [name]: [value] });
  // }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { name, imageUrl, ageRating, releaseYear, genreIds, streamingIds } = inputValues;
      const data: CreateMovieInput = {
        name,
        imageUrl,
        ageRating: parseInt(ageRating),
        releaseYear: parseInt(releaseYear),
        genreIds: [genreIds],
        streamingIds: [streamingIds],
      };
      await MovieService.create(data);
      setOpenModal(false);
      setControl(!control);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGenres();
    getStreaming();
  }, []);
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <FormHeader>
        <Dialog.Close>X</Dialog.Close>
      </FormHeader>

      <FormControls>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" required onChange={handleChange} />
      </FormControls>

      <FormControls>
        <label htmlFor="imageUrl">Url da imagem</label>
        <input type="imageUrl" name="imageUrl" id="imageUrl" required onChange={handleChange} />
      </FormControls>

      <FormControls>
        <label htmlFor="releaseYear">Ano de lançamento</label>
        <input type="number" name="releaseYear" id="releaseYear" required onChange={handleChange} />
      </FormControls>

      <FormControls>
        <label htmlFor="ageRating">Classificação</label>
        <input type="number" name="ageRating" id="ageRating" required onChange={handleChange} />
      </FormControls>

      <SelectControls>
        <label htmlFor="">Genero</label>
        <SelectGenre name="genreIds" id="genreIds" onChange={handleChange}>
          <option defaultValue="" value=""></option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </SelectGenre>
      </SelectControls>
      <SelectControls>
        <label htmlFor="streaming">Streaming</label>
        <SelectStreaming name="streamingIds" id="streamingIds" onChange={handleChange}>
          <option defaultValue="" value=""></option>
          {streaming.map((streaming) => (
            <option key={streaming.id} value={streaming.id}>
              {streaming.name}
            </option>
          ))}
        </SelectStreaming>
      </SelectControls>

      <SubmitButton type="submit">Cadastrar</SubmitButton>
    </RegisterForm>
  );
}

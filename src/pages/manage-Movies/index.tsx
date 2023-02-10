import React, { FormEvent, useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { RadixDialog } from '../../components/radix-dialog';
import { ToastMessage } from '../../components/radix-toast';
import { MovieForm } from '../../components/register-movie';
import { MovieService } from '../../services/movies-service';
import { CreateMovieInput, Movie } from '../../types/movie-service-types';
import {
  ManageSection,
  MovieListTitle,
  MovieItem,
  MovieList,
  CreateMovieButton,
  CreateMovieContainer,
  EditButton,
  DeleteButton,
  Actions,
} from './style';

export function ManageMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieToUpdate, setMovieToUpdate] = useState({} as Movie);
  const [openCreateMovieModal, setOpenCreateMovieModal] = useState(false);
  const [openEditMovieModal, setOpenEditMovieModal] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(['']);
  const [control, setControl] = useState(false);

  async function getMovies() {
    try {
      const data = await MovieService().getAll();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateMovieSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const data: CreateMovieInput = {
        name: e.currentTarget.Name.value,
        imageUrl: e.currentTarget.imageUrl.value,
        ageRating: parseInt(e.currentTarget.ageRating.value),
        releaseYear: parseInt(e.currentTarget.releaseYear.value),
        genreIds: [e.currentTarget.genreIds.value],
        streamingIds: [e.currentTarget.streamingIds.value],
      };
      await MovieService().create(data);
      setControl(!control);
      setOpenCreateMovieModal(false);
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  async function handleUpdateMovieSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const data = {
        name:
          e.currentTarget.Name.value === movieToUpdate.name
            ? undefined
            : e.currentTarget.Name.value,

        imageUrl:
          e.currentTarget.imageUrl.value === movieToUpdate.imageUrl
            ? undefined
            : e.currentTarget.imageUrl.value,
        ageRating: parseInt(e.currentTarget.ageRating.value),
        releaseYear: parseInt(e.currentTarget.releaseYear.value),
        genreIds: [e.currentTarget.genreIds.value],
        streamingIds: [e.currentTarget.streamingIds.value],
      };
      await MovieService().update({ id: movieToUpdate.id, ...data });
      setControl(!control);
      setOpenEditMovieModal(false);
    } catch (error: any) {
      setToastMessage(error.response.data.message);
      setOpenToast(true);
    }
  }

  async function handleDeleteMovieSubmit(id: string) {
    try {
      await MovieService().remove(id);
      setControl(!control);
    } catch (error: any) {
      setToastMessage(['Erro inesperado ao tentar excluir o filme']);
      setOpenToast(true);
    }
  }

  useEffect(() => {
    getMovies();
  }, [control]);

  return (
    <>
      <Header />
      <ManageSection>
        <CreateMovieContainer>
          <CreateMovieButton type="button" onClick={() => setOpenCreateMovieModal(true)}>
            Cadastrar Novo filme
          </CreateMovieButton>
        </CreateMovieContainer>

        <MovieListTitle>Filmes Cadastrados:</MovieListTitle>
        <MovieList>
          {movies.map((movie) => (
            <MovieItem key={movie.id}>
              <div>
                <h3>Nome:</h3>
                <span>{movie.name}</span>
              </div>

              <div>
                <h3>Url da Imagem:</h3>
                <span>{movie.imageUrl}</span>
              </div>

              <div>
                <h3>Ano de Lançamento:</h3>
                <span>{movie.releaseYear}</span>
              </div>

              <div>
                <h3>Classificação:</h3>
                <span>{movie.ageRating + ' anos'}</span>
              </div>

              <div>
                <h3>Gêneros:</h3>
                <span>{movie.genres.map((genre) => genre.name)}</span>
              </div>

              <div>
                <h3>Disponibilidade:</h3>
                <span>{movie.stream.map((stream) => stream.name)}</span>
              </div>

              <Actions>
                <EditButton
                  onClick={() => {
                    setMovieToUpdate(movie);
                    setOpenEditMovieModal(true);
                  }}
                >
                  editar
                </EditButton>
                <DeleteButton onClick={() => handleDeleteMovieSubmit(movie.id)}>
                  deletar
                </DeleteButton>
              </Actions>
            </MovieItem>
          ))}
        </MovieList>

        <RadixDialog open={openCreateMovieModal} onOpenChange={setOpenCreateMovieModal}>
          <MovieForm onSubmit={handleCreateMovieSubmit} btnText="Cadastrar" />
        </RadixDialog>

        <RadixDialog open={openEditMovieModal} onOpenChange={setOpenEditMovieModal}>
          <MovieForm onSubmit={handleUpdateMovieSubmit} movie={movieToUpdate} btnText="Editar" />
        </RadixDialog>

        <ToastMessage
          openToast={openToast}
          setOpenToast={setOpenToast}
          title="Erro"
          messages={toastMessage}
        />
      </ManageSection>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Header } from '../../components/header';
import { MovieService } from '../../services/movies-service';
import { Movie } from '../../types/movie-service-types';
import {
  DialogTrigger,
  ManageMoviesSection,
  DialogOverlay,
  DialogContent,
  Title,
  MovieItem,
  MovieList,
} from './style';
import { RegisterMovieForm } from '../../components/register-movie';

export function ManageMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [control, setControl] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  async function getMovies() {
    try {
      const data = await MovieService.getAll();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMovie(id: string) {
    await MovieService.delete(id)
    setControl(!control)
  }

  useEffect(() => {
    getMovies();
  }, [control]);

  return (
    <ManageMoviesSection>
      <Header />
      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger>Cadastrar novo filme</DialogTrigger>
        <Dialog.Portal>
          <DialogOverlay>
            <DialogContent>
              <RegisterMovieForm
                control={control}
                setControl={setControl}
                setOpenModal={setOpenModal}
              />
            </DialogContent>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
      <Title>Filmes Cadastrados:</Title>
      <MovieList>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            {movie.name} <button onClick={() => deleteMovie(movie.id)}>deletar</button>
          </MovieItem>
        ))}
      </MovieList>
    </ManageMoviesSection>
  );
}

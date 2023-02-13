import { BookmarkIcon, Card, DislikeIcon, LikeIcon } from './style';
import { Movie } from '../../types/movie-service-types';
import { ProfileService } from '../../services/profile-service';
import { ToastMessage } from '../radix-toast';
import { useEffect, useState } from 'react';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const [toastMessage, setToastMessage] = useState<string[]>([]);
  const [typeToastMessage, setTypeToastMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [favoriteMoviesOnProfile, setFavoriteMoviesOnProfile] = useState<Movie[]>([]);
  const [control, setControl] = useState(false);

  async function getFavoriteMoviesFromProfile() {
    const favorites = await ProfileService().findFavoriteMoviesFromProfile();
    setFavoriteMoviesOnProfile(favorites);
  }

  async function addMovieToFavorite(movieId: string) {
    try {
      await ProfileService().addMovieToFavorites(movieId);
      setControl(!control);
      setTypeToastMessage('success');
      setToastMessage(['Filme adicionado aos favoritos']);
      setOpenToast(true);
    } catch (error: any) {
      setTypeToastMessage('fail');
      setToastMessage(['Erro ao adicionar filme aos favoritos']);
      setOpenToast(true);
      console.log(error);
    }
  }

  async function removeMovieFromFavorite(movieId: string) {
    try {
      await ProfileService().removeMovieFromFavorites(movieId);
      setControl(!control);
      setTypeToastMessage('success');
      setToastMessage(['Filme removido dos favoritos']);
      setOpenToast(true);
    } catch (error: any) {
      setTypeToastMessage('fail');
      setToastMessage(['Erro ao remover filme dos favoritos']);
      setOpenToast(true);
      console.log(error);
    }
  }

  useEffect(() => {
    getFavoriteMoviesFromProfile();
  }, [control]);

  return (
    <>
      <Card>
        <BookmarkIcon />
        <LikeIcon
          isfavorite={favoriteMoviesOnProfile.some((favoriteMovie) => favoriteMovie.id === movie.id)}
          onClick={() => addMovieToFavorite(movie.id)}
        />
        <DislikeIcon onClick={() => removeMovieFromFavorite(movie.id)} />
        <img src={movie.imageUrl} alt="imagem do filme" />
        <ToastMessage
          openToast={openToast}
          setOpenToast={setOpenToast}
          messages={toastMessage}
          typeMessages={typeToastMessage}
          title="Favoritos"
        />
      </Card>
    </>
  );
}

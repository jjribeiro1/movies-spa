import { BookmarkIcon, Card, DislikeIcon, LikeIcon } from './style';
import { Movie } from '../../types/movie-service-types';
import { ProfileService } from '../../services/profile-service';
import { ToastMessage } from '../radix-toast';
import { useEffect, useState } from 'react';

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  changeFavorite: (movie: Movie) => void;
}

export function MovieCard({ movie, isFavorite, changeFavorite }: MovieCardProps) {
  const [toastMessage, setToastMessage] = useState<string[]>([]);
  const [typeToastMessage, setTypeToastMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);

  async function addMovieToFavorite(movie: Movie) {
    try {
      await ProfileService().addMovieToFavorites(movie.id);
      changeFavorite(movie);
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

  async function removeMovieFromFavorite(movie: Movie) {
    try {
      await ProfileService().removeMovieFromFavorites(movie.id);
      changeFavorite(movie);
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
  return (
    <>
      <Card>
        <BookmarkIcon />
        <LikeIcon
          isfavorite={isFavorite}
          onClick={() => (isFavorite ? removeMovieFromFavorite(movie) : addMovieToFavorite(movie))}
        />
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

import { BookmarkIcon, Card, DislikeIcon, LikeIcon } from './style';
import { Movie } from '../../types/movie-service-types';
import { ProfileService } from '../../services/profile-service';
import { ToastMessage } from '../radix-toast';
import { useState } from 'react';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const [toastMessage, setToastMessage] = useState<string[]>([]);
  const [typeToastMessage, setTypeToastMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);

  async function addMovieToFavorite(movieId: string) {
    try {
      await ProfileService().addMovieToFavorites(movieId);
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
        <LikeIcon isLiked={false} onClick={() => addMovieToFavorite(movie.id)} />
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

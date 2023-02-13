import { BookmarkIcon, Card, DislikeIcon, LikeIcon } from './style';
import { Movie } from '../../types/movie-service-types';
import { ProfileService } from '../../services/profile-service';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  async function addMovieToFavorite(movieId: string) {
    try {
      await ProfileService().addMovieToFavorites(movieId);
    } catch (error: any) {
      console.log(error);
    }
  }

  async function removeMovieFromFavorite(movieId: string) {
    try {
      await ProfileService().removeMovieFromFavorites(movieId);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <Card>
      <BookmarkIcon />
      <LikeIcon isLiked={false} onClick={() => addMovieToFavorite(movie.id)} />
      <DislikeIcon onClick={() => removeMovieFromFavorite(movie.id)} />
      <img src={movie.imageUrl} alt="imagem do filme" />
    </Card>
  );
}

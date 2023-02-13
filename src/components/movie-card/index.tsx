import { BookmarkIcon, Card, DislikeIcon, LikeIcon } from './style';
import { Movie } from '../../types/movie-service-types';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <BookmarkIcon />
      <LikeIcon />
      <DislikeIcon />
      <img src={movie.imageUrl} alt="imagem do filme" />
    </Card>
  );
}

import { Card } from './style';
import { Movie } from '../../types/movie-service-types';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <img src={movie.imageUrl} alt="imagem do filme" />
    </Card>
  );
}

import { DislikeIcon, FavoritesSection, FavoritesSectionTitle, MovieCard } from './style';
import { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { MovieList } from '../Home/style';
import { ProfileService } from '../../services/profile-service';
import { Movie } from '../../types/movie-service-types';
import { ToastMessage } from '../../components/radix-toast';

export function FavoriteMovies() {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [toastMessage, setToastMessage] = useState<string[]>([]);
  const [typeToastMessage, setTypeToastMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);

  async function getFavoriteMovies() {
    const favorites = await ProfileService().findFavoriteMoviesFromProfile();
    setFavoriteMovies(favorites);
  }

  async function removeMovieFromFavorites(id: string) {
    try {
      await ProfileService().removeMovieFromFavorites(id);
      changeFavoriteMoviesList(id);
      setTypeToastMessage('success');
      setToastMessage(['Filme removido dos favoritos']);
      setOpenToast(true);
    } catch (error) {
      setTypeToastMessage('fail');
      setToastMessage(['Erro ao remover filme aos favoritos']);
      setOpenToast(true);
    }
  }

  function changeFavoriteMoviesList(id: string) {
    setFavoriteMovies((prevValues) => [
      ...prevValues.filter((favoriteMovie) => favoriteMovie.id !== id),
    ]);
  }

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  return (
    <>
      <Header />
      <FavoritesSection>
      <FavoritesSectionTitle>
        {favoriteMovies.length > 0
          ? 'Seus filmes favoritos'
          : 'Oops, parece que você não tem nenhum filme favorito'}
      </FavoritesSectionTitle>
        <MovieList>
          {favoriteMovies.map((favoriteMovie) => (
            <MovieCard key={favoriteMovie.id}>
              <DislikeIcon onClick={() => removeMovieFromFavorites(favoriteMovie.id)} />
              <img src={favoriteMovie.imageUrl} alt={`imagem do filme ${favoriteMovie.name}`} />
            </MovieCard>
          ))}
        </MovieList>
      </FavoritesSection>
      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Favoritos"
        messages={toastMessage}
        typeMessages={typeToastMessage}
      />
    </>
  );
}

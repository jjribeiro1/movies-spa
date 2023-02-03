import React, { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { MovieCard } from '../../components/movie-card';
import { MovieService } from '../../services/movies-service';
import { Movie } from '../../types/movie-service-types';
import { MainContent, MainWrapper, MovieList, SearchIcon, SearchMovies } from './style';

export function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const filteredMovies =
    searchInput.length > 0
      ? movies.filter((movie) =>
          movie.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
        )
      : movies;

  async function getMovies() {
    try {
      const data = await MovieService().getAll();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <MainWrapper>
        <MainContent>
          <SearchMovies>
            <SearchIcon inputvalue={searchInput} />
            <input
              type="text"
              placeholder="Pesquisar"
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>
          </SearchMovies>
          <MovieList>
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </MovieList>
        </MainContent>
      </MainWrapper>
    </>
  );
}

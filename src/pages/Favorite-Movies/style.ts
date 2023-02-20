import styled, { css } from 'styled-components';
import { Card } from '../../components/movie-card/style';
import { BiDislike } from 'react-icons/bi';

export const FavoritesSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 2rem;
    padding: 1rem;
    max-width: 1440px;
    height: 100%;
    background-color: ${theme.colors.pageBg};
    font-size: 1rem;
  `}
`;

export const FavoritesSectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.c4};
    font-size: 2.5rem;

    @media screen and (width <= 1000px) {
      font-size: 2rem;
    }
  `}
`;

export const MovieCard = styled(Card)``;

export const DislikeIcon = styled(BiDislike)`
  ${({ theme }) => css`
    display: none;
    top: 2%;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: ${theme.colors.c8};
    color: #fff;
  `}
`;

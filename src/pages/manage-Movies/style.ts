import * as Dialog from '@radix-ui/react-dialog';
import styled, { css } from 'styled-components';

export const ManageSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
    height: 100%;
    background-color: ${theme.colors.pageBg};
    font-size: 1rem;
  `}
`;

export const CreateMovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem;
`;

export const CreateMovieButton = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem 2rem;
    border: 0;
    border-radius: 5px;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${theme.colors.c3};
    background-color: ${theme.colors.btnOne};
    cursor: pointer;
  `}
`;

export const MovieListTitle = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem;
    font-size: 2.5rem;
    color: ${theme.colors.c7};

    @media screen and (width < 1025px) {
      padding: 1rem;
    }

    @media screen and (width < 769px) {
      font-size: 1.5rem;
    }
  `}
`;

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 10px;
  width: 100%;
  height: 100%;

  @media screen and (width < 1025px) {
    padding: 1rem;
  }
`;

export const MovieItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    padding: 1rem;
    div {
      display: flex;
      align-items: center;
      gap: 8px;

      h3 {
        display: inline;
        color: ${theme.colors.c5};
      }

      span {
        color: ${theme.colors.c1};
      }
    }

    color: ${theme.colors.c1};

    :nth-child(odd) {
      background-color: ${theme.colors.c8};
    }
  `}
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 15px;
  font-size: 1.3rem;
  font-weight: 500;

  @media screen and (width < 1025px) {
    font-size: 1rem;
  }

  @media screen and (width < 769px) {
    font-size: 0.8rem;
  }
`;

export const EditButton = styled.button`
  ${({ theme }) => css`
    padding: 2px 5px;
    color: ${theme.colors.c8};
    background-color: ${theme.colors.c5};
    border-radius: 5px;
    border: 0;
    cursor: pointer;
  `}
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    padding: 0.1rem 0.2rem;
    color: ${theme.colors.c1};
    background-color: ${theme.colors.toastFail};
    border-radius: 5px;
    border: 0;
    cursor: pointer;
  `}
`;

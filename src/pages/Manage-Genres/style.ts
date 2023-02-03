import styled, { css } from 'styled-components';
export const ManageSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.pageBg};
  `}
`;

export const CreateGenreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-left: 3rem;
  align-items: center;
  width: 300px;
  height: 40px;
  gap: 20px;
`;

export const GenreInput = styled.input`
  ${({ theme }) => css`
    padding: 0.2rem;
    background-color: ${theme.colors.inputBg};
  `}
`;

export const CreateGenreButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    width: 5.8rem;
    height: 1.5rem;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.c3};
    background-color: ${theme.colors.btnOne};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 1rem;
    font-size: 1.3rem;
    color: ${theme.colors.c1};
  `}
`;

export const GenreList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 5px;
  width: 50%;
  height: 100%;
`;

export const GenreItem = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.c1};
  `}
`;

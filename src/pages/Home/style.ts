import styled, { css } from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const MainWrapper = styled.main`
  width: 100%;
`;

export const MainContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${theme.colors.pageBg};
  `}
  color: white;
`;

export const SearchMovies = styled.div`
  ${({ theme }) => css`
    padding: 3rem;
    position: relative;
    input {
      padding: 0.5rem 3rem;
      border-style: none;
      color: #fff;
      font-size: 1.2rem;
      position: relative;
      background-color: ${theme.colors.c8};
      ::placeholder {
        top: 10px;
        left: 100px;
        position: absolute;
        font-weight: 600;
        color: gray;
      }
    }
  `}
`;

type SearchIconProps = {
  inputvalue: string;
};

export const SearchIcon = styled(BiSearch)<SearchIconProps>`
  ${({ theme }) => css`
    color: #666666;
  `}
  position: absolute;
  display: ${(props) => (props.inputvalue.length > 0 ? 'none' : 'block')};
  top: 60px;
  left: 70px;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 2rem;
  gap: 20px;
  max-width: 100%;

  @media screen and (width < 501px) {
    gap: 10px;
  }
`;

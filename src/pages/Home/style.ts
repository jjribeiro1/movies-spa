import styled, { css } from 'styled-components';
import { BiSearch } from 'react-icons/bi';
export const HomeMain = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.pageBg};
  `}
  color: white;
`;

export const SearchMovies = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    margin: 2rem auto;
    align-items: center;
    padding: 0.2rem;

    input {
      padding: 0.5rem;
      border-radius: 3px;
      font-size: 1rem;
      background-color: ${theme.colors.inputBg};
      ::placeholder {
        top: 10px;
        left: 70px;
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
    color: ${theme.colors.textThree};
  `}
  position: absolute;
  display: ${(props) => (props.inputvalue.length > 0 ? 'none' : 'block')};
  left: 20px;
  width: 20px;
  height: 20px;
`;

export const MovieList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 2rem;
  padding: 0.5rem;
  gap: 15px;
  height: 100%;
`;

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

export const CreateGenreContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 5rem;
    width: 100%;
    color: ${theme.colors.c5};

    @media screen and (width <= 1000px) {
      padding: 3rem;
      font-size: 0.8rem;
    }

    @media screen and (width <= 600px) {
      padding: 2rem;
      font-size: 0.6rem;
      gap: 10px;
    }

    input {
      padding: 0.3rem;
      border-radius: 5px;
      background-color: ${theme.colors.inputBg};

      @media screen and (width <= 1000px) {
        padding: 0.2rem;
      }
    }

    button {
      padding: 0.3rem 1rem;
      border-radius: 5px;
      color: ${theme.colors.c5};
      background-color: ${theme.colors.lightBg3};
      border: 0;
      cursor: pointer;

      @media screen and (width <= 1000px) {
        padding: 0.2rem 0.5rem;
      }
    }
  `}
`;

export const GenreList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const GenreListTitle = styled.h2`
  ${({ theme }) => css`
    margin: 2rem;
    font-size: 3rem;
    color: ${theme.colors.c7};

    @media screen and (width < 1025px) {
      font-size: 2rem;
    }

    @media screen and (width < 769px) {
      font-size: 1.5rem;
    }
  `}
`;

export const GenreItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: fit-content;
    width: 100%;
    :nth-child(odd) {
      background-color: ${theme.colors.c8};
    }

    span {
      font-size: 2.5rem;
      font-weight: 600;
      color: ${theme.colors.c5};

      @media screen and (width < 1025px) {
        font-size: 2rem;
      }

      @media screen and (width < 769px) {
        font-size: 1.5rem;
      }
    }
  `}
`;

export const Actions = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
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
    padding: 0.1rem 0.2rem;
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

export const GenreForm = styled.form`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 300px;
    height: 250px;
    gap: 20px;
    background-color: ${theme.colors.c3};
    border-radius: 5px;
    color: ${theme.colors.c1};

    @media screen and (width < 769px) {
      width: 250px;
      height: 200px;
    }

    span {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 1.5rem;
      cursor: pointer;
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: 2rem;
      width: 100%;
      gap: 5px;

      @media screen and (width < 769px) {
        font-size: 1.5rem;
      }

      input {
        font-size: 1.5rem;

        @media screen and (width < 769px) {
          font-size: 1rem;
        }
      }
    }

    button {
      padding: 0.1rem 0.5rem;
      font-size: 1.4rem;
      border-radius: 5px;
      border: 0;
      color: ${theme.colors.c3};
      background-color: ${theme.colors.c7};
      margin-top: 1rem;
      cursor: pointer;

      @media screen and (width < 769px) {
        font-size: 1rem;
      }
    }
  `}
`;

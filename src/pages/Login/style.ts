import styled, { css } from 'styled-components';

export const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  max-width: 1440px;
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 380px;
    height: 400px;
    border-radius: 10px;
    background-color: ${theme.colors.lightBg3};
  `}

  @media screen and (width < 768px) {
    width: 340px;
    height: 360px;
    padding: 1.2rem;
  }

  @media screen and (width < 425px) {
    width: 300px;
  }
`;

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 2rem;
    color: ${theme.colors.c1};
  `}

  @media screen and (width < 768px) {
    font-size: 1.5rem;
  }
`;

export const FormControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 0.3rem;
    margin: 1.2rem 0;

    label {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.colors.c4};

      @media screen and (width < 768px) {
        font-size: 1rem;
      }
    }

    input {
      padding: 0.6rem;
      width: 100%;
      height: 1.8rem;
      font-size: 1.2rem;
      border-radius: 5px;
      background-color: ${theme.colors.inputBg};
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    max-width: fit-content;
    padding: 0.2rem 2rem;
    margin: 1rem 0;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.c3};
    background-color: ${theme.colors.btnOne};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;

export const Register = styled.div`
  ${({ theme }) => css`
    font-size: 1rem;
    display: flex;
    gap: 1rem;
    color: ${theme.colors.c2};

    @media screen and (width < 425px) {
      font-size: 0.8rem;
    }

    button {
      background-color: inherit;
      color: ${theme.colors.c5};
      border-style: none;
      :hover {
        cursor: pointer;
      }
    }
  `}
`;

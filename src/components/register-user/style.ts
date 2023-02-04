import styled, { css } from 'styled-components';

export const RegisterForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 380px;
    height: 550px;
    border-radius: 10px;
    background-color: ${theme.colors.lightBg3};
    position: relative;
  `}

  @media screen and (width < 768px) {
    width: 340px;
    height: 500px;
    padding: 1.2rem;
  }
  @media screen and (width < 425px) {
    width: 300px;
  }
`;

export const FormHeader = styled.div`
  ${({ theme }) => css`
    button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: inherit;
      border-style: none;
      color: ${theme.colors.c2};
      font-size: 1.3rem;
      font-weight: 700;

      :hover {
        cursor: pointer;
      }
    }
  `}
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
    margin: 1rem 0;

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

import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 350px;
    height: 400px;
    border-radius: 10px;
    background-color: ${theme.colors.lightBg3};
    position: relative;

    @media screen and (width <= 1024px) {
      width: 320px;
      height: 370px;
      padding: 1.2rem;
    }

    @media screen and (width <= 768px) {
      width: 270px;
      height: 320px;
      padding: 1.2rem;
    }
  `}
`;

export const FormHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 0.5rem;

    button {
      position: absolute;
      top: 15px;
      right: 5px;
      width: 1.7rem;
      height: 1.5rem;
      border-radius: 5px;
      background-color: inherit;
      border-style: none;
      color: ${theme.colors.c2};
      font-size: 1.2rem;

      :hover {
        cursor: pointer;
      }
    }
  `}
`;

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 1.5rem;
    color: ${theme.colors.c1};

    @media screen and (width <= 768px) {
      font-size: 1.2;
    }
  `}
`;

export const FormControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 80%;
    margin: 1rem 0rem;

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
    padding: 0.2rem 1rem;
    margin-top: 1.3rem;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${theme.colors.c3};
    background-color: ${theme.colors.btnOne};
    border-style: none;
    :hover {
      cursor: pointer;
    }

    @media screen and (width <= 1024px) {
      font-size: 1rem;
    }
  `}
`;

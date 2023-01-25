import * as Dialog from '@radix-ui/react-dialog';
import styled, { css } from 'styled-components';

export const CreateProfileForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 260px;
    height: 320px;
    border-radius: 10px;
    background-color: ${theme.colors.lightBg3};
    position: relative;
  `}
`;

export const FormHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;

    button {
      position: absolute;
      top: 15px;
      right: 5px;
      width: 1.7rem;
      height: 1.5rem;
      border-radius: 5px;
      background-color: inherit;
      border-style: none;
      color: ${theme.colors.textTwo};
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
    color: ${theme.colors.textOne};
  `}
`;

export const FormControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: 1rem 1rem;

    label {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.colors.textFour};
    }

    input {
      padding: 0.6rem;
      height: 1.8rem;
      font-size: 1.2rem;
      border-radius: 5px;
      background-color: ${theme.colors.inputBg};
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 0.3rem;
    margin-top: 1.5rem;
    width: 5.5rem;
    height: 2.5rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.textThree};
    background-color: ${theme.colors.btnOne};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;

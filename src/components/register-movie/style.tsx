import styled, { css } from 'styled-components';
import { Close } from '@radix-ui/react-dialog';

export const FormContainer = styled.form`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;
    width: 360px;
    height: 580px;
    border-radius: 10px;
    background-color: ${theme.colors.lightBg3};
    position: relative;
  `}
`;

export const CloseForm = styled(Close)`
  ${({ theme }) => css`
    position: absolute;
    top: 10px;
    right: 10px;
    border: 0;
    font-size: 1.3rem;
    background-color: inherit;
    color: ${theme.colors.c1};
    cursor: pointer;
  `}
`;

export const FormControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;

    label {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.colors.c4};
    }

    input {
      font-size: 1.2rem;
      border-radius: 5px;
      background-color: ${theme.colors.inputBg};
    }
  `}
`;

export const SelectControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;

    label {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.colors.c4};
    }
  `}
`;

export const SelectGenre = styled.select`
  background-color: #ffffff;
`;

export const SelectStreaming = styled.select`
  background-color: #ffffff;
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    padding: 0.2rem 0.5rem;
    width: fit-content;
    margin-top: 10px;
    border-radius: 6px;
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

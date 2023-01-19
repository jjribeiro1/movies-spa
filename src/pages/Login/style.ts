import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const LoginSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${theme.colors.pageBg};
  `}
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 360px;
    height: 380px;
    border-radius: 10px;
    background-color: ${theme.colors.lightBg};
  `}
`;

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    color: ${theme.colors.textOne};
  `}
`;

export const FormControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: 1.2rem 1.2rem;

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

export const Register = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    margin: 1.4rem auto;
    color: ${theme.colors.textTwo};
  `}
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    color: ${theme.colors.textFive};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    inset: 0;
    position: absolute;
    background-color: ${theme.colors.lightBg};
    width: 100%;
    height: 100%;
  `}
`;

export const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

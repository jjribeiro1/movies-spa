import * as Toast from '@radix-ui/react-toast';
import styled, { css } from 'styled-components';

export const ToastViewport = styled(Toast.Viewport)`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 350px;
  padding: 0.6rem;
  list-style: none;
`;

export const ToastRoot = styled(Toast.Root)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 1rem;
    border-radius: 5px;
    background-color: ${theme.colors.toastFail};
  `}
`;

export const ToastTitle = styled(Toast.Title)`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${theme.colors.textOne};
  `}
`;

export const ToastClose = styled(Toast.Close)`
  position: absolute;
  top: 16px;
  right: 17px;
  width: 20px;
  height: 20px;
  font-size: 1.1rem;
  border-style: none;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export const ToastDescription = styled(Toast.Description)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${theme.colors.textOne};
  `}
`;

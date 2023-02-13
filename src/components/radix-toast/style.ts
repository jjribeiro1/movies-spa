import { Viewport, Root, Title, Close, Description } from '@radix-ui/react-toast';
import styled, { css } from 'styled-components';

export const ToastViewport = styled(Viewport)`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  z-index: 999999;
`;

export type ToastType = {
  typeMessage?: string;
};

export const ToastRoot = styled(Root)<ToastType>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 5px;
  color: #ffffff;
  background-color: ${(props) => (props.typeMessage === 'success' ? '#1c252f' : '#e62f30')};
`;

export const ToastTitle = styled(Title)`
  font-size: 1rem;
  font-weight: 600;
`;

export const ToastHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ToastClose = styled(Close)`
  ${({ theme }) => css`
    padding: 0.5px 4px;
    border-style: none;
    border-radius: 2px;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: ${theme.colors.c1};
    :hover {
      cursor: pointer;
    }
  `}
`;

export const ToastDescription = styled(Description)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
  font-weight: 400;
`;

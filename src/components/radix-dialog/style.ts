import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const DialogOverlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    inset: 0;
    position: fixed;
    background-color: ${theme.colors.m1};
  `}
`;

export const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

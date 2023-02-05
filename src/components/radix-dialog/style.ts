import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const DialogOverlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    inset: 0;
    z-index: 999;
    position: fixed;
    background-color: ${theme.colors.m1};
  `}
`;

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

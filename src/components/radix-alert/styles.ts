import { Overlay, Content } from '@radix-ui/react-alert-dialog';
import styled, { css } from 'styled-components';

export const AlertOverlay = styled(Overlay)`
  ${({ theme }) => css`
    position: fixed;
    z-index: 999;
    inset: 0;
    background-color: ${theme.colors.m1};
  `}
`;

export const AlertContent = styled(Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

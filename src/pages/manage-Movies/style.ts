import * as Dialog from '@radix-ui/react-dialog';
import styled, { css } from 'styled-components';

export const ManageMoviesSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.pageBg};
  `}
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    width: 10rem;
    height: 2rem;
    margin: 1rem auto;
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

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-left: 2rem;
    font-size: 1.3rem;
    color: ${theme.colors.textOne};
  `}
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 5px;
  width: 50%;
  height: 100%;
`;

export const MovieItem = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textOne};
  `}
`;

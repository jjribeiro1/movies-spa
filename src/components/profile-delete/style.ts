import { Title, Description, Cancel } from '@radix-ui/react-alert-dialog';
import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 1.2rem;
    border-radius: 5px;
    background-color: ${theme.colors.c8};

    @media screen and (width < 769px) {
      font-size: 0.8rem;
    }

    @media screen and (width <= 500px) {
      font-size: 0.7rem;
    }
  `}
`;

export const AlertTitle = styled(Title)`
  ${({ theme }) => css`
    color: ${theme.colors.c1};
  `}
`;

export const AlertDescription = styled(Description)`
  ${({ theme }) => css`
    color: ${theme.colors.c2};
  `}
`;

export const AlertButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
  `}
`;

export const AlertCancel = styled(Cancel)`
  ${({ theme }) => css`
    width: fit-content;
    padding: 0.1rem 0.2rem;
    border-radius: 5px;
    color: ${theme.colors.c1}
    border-style: none;

    :hover {
      cursor: pointer;
    }
  `}
`;

export const AlertAction = styled.button`
  ${({ theme }) => css`
    width: fit-content;
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
    background-color: rgba(100, 0, 20, 0.8);
    color: ${theme.colors.c4};
    border-style: none;

    :hover {
      cursor: pointer;
    }
  `}
`;

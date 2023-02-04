import styled, { css } from 'styled-components';

export const Card = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;
    transition: 0.5s;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      height: 80%;
      width: 85%;
      text-decoration: none;
      @media screen and (width <= 600px) {
        gap: 0.3rem;
      }

      img {
        border-radius: 5px;
      }

      span {
        width: max-content;
        font-size: 1.2rem;
        color: ${theme.colors.c4};
        @media screen and (width <= 800px) {
          font-size: 1rem;
        }
        @media screen and (width <= 600px) {
          font-size: 0.6rem;
        }
      }
    }

    :hover {
      transform: scale(1.1);
    }
  `}
`;

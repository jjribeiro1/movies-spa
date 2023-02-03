import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    align-items: center;
    width: 20%;
    border-radius: 5px;
    min-height: 100px;
    max-height: 200px;
    min-width: 130px;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      transform: scale(1.15);
    }
    img {
      margin-top: 15px;
      max-width: 100%;
      height: auto;
      display: block;
    }

    h2 {
      margin-top: 15px;
      font-size: 1.3rem;
      color: ${theme.colors.c4};
    }
  `}
`;

export const RouterDomLink = styled(Link)`
  display: flex;
  flex-direction: column;
`;

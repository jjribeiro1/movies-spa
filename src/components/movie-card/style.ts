import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    align-items: center;
    width: 10%;
    min-height: 100px;
    max-height: 200px;
    min-width: 130px;
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 1rem;

    :hover {
      transform: scale(1.1);
    }

    img {
      margin-top: 15px;
      max-width: 100%;
      height: auto;
      display: block;
    }
  `}
`;


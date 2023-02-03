import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Card = styled.li`
  ${({ theme }) => css`
    display: block;
    list-style: none;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: 0.3s;
    }
    img {
      height: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
  `}
`;

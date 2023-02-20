import styled, { css } from 'styled-components';
import { BiLike } from 'react-icons/bi';

export const Card = styled.li`
  display: block;
  list-style: none;
  position: relative;
  max-height: 295px;
  max-width: 200px;

  :hover {
    cursor: pointer;

    svg {
      display: block;
      position: absolute;
      padding: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 3px;
  }
`;

type LikeIconProps = {
  isfavorite: boolean;
};

export const LikeIcon = styled(BiLike)<LikeIconProps>`
  ${({ theme }) => css`
    display: none;
    top: 2%;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: ${theme.colors.c8};
  `}
  color: ${(props) => (props.isfavorite ? '#fbc500' : '#ffffff')}
`;

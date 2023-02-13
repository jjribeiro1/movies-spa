import styled, { css } from 'styled-components';
import { BiLike, BiDislike } from 'react-icons/bi';
import { MdBookmark } from 'react-icons/md';

export const Card = styled.li`
  display: block;
  list-style: none;
  position: relative;

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
    border-radius: 3px;
  }
`;

export const BookmarkIcon = styled(MdBookmark)`
  ${({ theme }) => css`
    display: none;
    top: 2%;
    left: 5%;
    padding: 1px;
    background-color: ${theme.colors.c8};
    color: ${theme.colors.c1};
  `}
`;

type LikeIconProps = {
  isLiked: boolean
};
export const LikeIcon = styled(BiLike)<LikeIconProps>`
  ${({ theme }) => css`
    display: none;
    top: 2%;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: ${theme.colors.c8};
  `}
  color: ${(props) => (props.isLiked ? '#fbc500' : '#ffffff')}
`;

export const DislikeIcon = styled(BiDislike)`
  ${({ theme }) => css`
    display: none;
    top: 2%;
    right: 5%;
    background-color: ${theme.colors.c8};
    color: ${theme.colors.c1};
  `}
`;

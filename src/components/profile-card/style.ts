import styled, { css } from 'styled-components';
import { AiOutlineSetting } from 'react-icons/ai';

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
      position: relative;
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

type SettingIconProps = {
  editing: string;
};

export const SettingIcon = styled(AiOutlineSetting)<SettingIconProps>`
  ${({ theme }) => css`
    color: ${theme.colors.c1};
  `}
  display: ${(props) => (props.editing == 'true' ? 'block' : 'none')};
  position: absolute;
  top: -35px;
  right: 5px;
  width: 30px;
  height: 30px;
  z-index: 99;

  @media screen and (width < 1025px) {
    top: -25px;
    right: 5px;
    width: 20px;
    height: 20px;
  }

  @media screen and (width < 601px) {
    top: -18px;
    right: 5px;
    width: 15px;
    height: 15px;
  }

  @media screen and (width < 501px) {
    top: -15px;
    right: 5px;
    width: 12px;
    height: 12px;
  }
`;

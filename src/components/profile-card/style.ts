import styled, { css } from 'styled-components';
import { AiOutlineSetting } from 'react-icons/ai';
import { Content } from '@radix-ui/react-popover';

export const Card = styled.li`
  ${({ theme }) => css`
    max-height: 300px;
    width: 25%;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      position: relative;
      cursor: pointer;

      div {
        position: relative;

        img {
          max-height: 250px;
          border-radius: 5px;
        }
      }
      span {
        font-size: 1.4rem;
        color: ${theme.colors.c1};
        text-decoration: none;
        @media screen and (width < 1025px) {
          font-size: 1rem;
        }
        @media screen and (width < 769px) {
          font-size: 0.8rem;
        }
        @media screen and (width < 600px) {
          font-size: 0.6rem;
        }
      }
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
  right: 0px;
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

export const PopoverContent = styled(Content)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    gap: 0.2rem;
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
    background-color: ${theme.colors.lightBg3};

    @media screen and (width <= 1024px) {
      position: absolute;
      right: -70px;
      padding: 0.5rem 0.2rem;
      font-size: 0.8rem;
    }

    @media screen and (width <= 768px) {
      font-size: 0.6rem;
    }

    @media screen and (width <= 600px) {
      padding: 0.3rem 0.2rem;
    }

    @media screen and (width <= 500px) {
      padding: 0.1rem 0.1rem;
      font-size: 0.5rem;
    }

    button {
      width: 100%;
      background-color: inherit;
      border-color: ${theme.colors.c5};
      color: ${theme.colors.c1};
      :hover {
        cursor: pointer;
      }
    }
  `}
`;

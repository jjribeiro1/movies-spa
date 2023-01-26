import styled, { css } from 'styled-components';
import { BiMoviePlay } from 'react-icons/bi';
import { MdManageAccounts } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 90%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin: 0 auto;
`;

export const LogoIcon = styled(BiMoviePlay)`
  ${({ theme }) => css`
    height: 25px;
    width: 25px;
    color: ${theme.colors.logoTitle};
  `}
`;

export const LogoTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 1.3rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${theme.colors.logoTitle};
  `}
`;

export const SettingsIcon = styled(MdManageAccounts)`
  ${({ theme }) => css`
    height: 30px;
    width: 30px;
    color: ${theme.colors.textFour};
  `}
`;

export const HamburgerIcon = styled(RxHamburgerMenu)`
  ${({ theme }) => css`
    height: 25px;
    width: 25px;
    color: ${theme.colors.textFour};
  `}
`;

import styled, { css } from 'styled-components';
import { BiMoviePlay } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1440px;
`;

export const HamburgerIcon = styled(RxHamburgerMenu)`
  ${({ theme }) => css`
    height: 2rem;
    width: 2rem;
    color: ${theme.colors.c6};
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

export const LogoIcon = styled(BiMoviePlay)`
  ${({ theme }) => css`
    height: 1.5rem;
    width: 1.5rem;
    color: ${theme.colors.logoTitle};
  `}
`;

export const LogoTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.logoTitle};
  `}
`;

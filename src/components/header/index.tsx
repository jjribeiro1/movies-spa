import React from 'react';
import { Dropdown } from '../dropdown';
import {
  HamburgerIcon,
  HeaderContainer,
  LogoContainer,
  LogoIcon,
  LogoTitle,
  NavBar,
} from './style';
export function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <HamburgerIcon />
        <LogoContainer>
          <LogoIcon />
          <LogoTitle>Just Watch</LogoTitle>
        </LogoContainer>
        <Dropdown />
      </NavBar>
    </HeaderContainer>
  );
}

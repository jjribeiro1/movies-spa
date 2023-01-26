import React from 'react';
import { HamburgerIcon, HeaderContainer, LogoContainer, LogoIcon, LogoTitle, NavBar, SettingsIcon } from './style';
export function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <HamburgerIcon/>
        <LogoContainer>
          <LogoIcon />
          <LogoTitle>Just Watch</LogoTitle>
        </LogoContainer>
        <SettingsIcon />
      </NavBar>
    </HeaderContainer>
  );
}

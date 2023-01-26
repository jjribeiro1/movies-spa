import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <NavBar>
        <HamburgerIcon />
        <LogoContainer onClick={() => navigate('/home')}>
          <LogoIcon />
          <LogoTitle>Just Watch</LogoTitle>
        </LogoContainer>
        <Dropdown />
      </NavBar>
    </HeaderContainer>
  );
}

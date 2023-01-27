import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../dropdown';
import { SettingsIcon } from '../dropdown/style';
import {
  HamburgerIcon,
  HeaderContainer,
  LogoContainer,
  LogoIcon,
  LogoTitle,
  NavBar,
} from './style';
export function Header() {
  function getIcon(){
    return (
      <>
      <SettingsIcon/>
      </>
    )
  }
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <NavBar>
        <HamburgerIcon />
        <LogoContainer onClick={() => navigate('/home')}>
          <LogoIcon />
          <LogoTitle>Just Watch</LogoTitle>
        </LogoContainer>
        <Dropdown Icon={getIcon()}/>
      </NavBar>
    </HeaderContainer>
  );
}

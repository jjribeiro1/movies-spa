import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../dropdown';
import { SettingsIcon } from '../dropdown/style';
import { RadixDropdownMenu } from '../radix-dropdown';
import {
  HamburgerIcon,
  HeaderContainer,
  LogoContainer,
  LogoIcon,
  LogoTitle,
  NavBar,
} from './style';
export function Header() {
  const navigate = useNavigate();

  function getIcon() {
    return <SettingsIcon />;
  }

  return (
    <HeaderContainer>
      <NavBar>
        <HamburgerIcon />
        <LogoContainer onClick={() => navigate('/home')}>
          <LogoIcon />
          <LogoTitle>Just Watch</LogoTitle>
        </LogoContainer>
        <RadixDropdownMenu iconTrigger={getIcon()}>
          <Dropdown />
        </RadixDropdownMenu>
      </NavBar>
    </HeaderContainer>
  );
}

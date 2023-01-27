import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/auth-service';
import {
  Trigger,
  SettingsIcon,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownGroup,
} from './style';

type DropdownProps = {
  Icon: ReactNode;
};

export function Dropdown({ Icon }: DropdownProps) {
  const navigate = useNavigate();
  function logOut() {
    AuthService().logOut();
    navigate('/');
  }
  return (
    <DropdownMenu.Root>
      <Trigger>{Icon}</Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent>
          <DropdownGroup>
            <DropdownMenuItem onClick={() => navigate('/manage-genres')}>
              Gerenciar gêneros
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/manage-streamings')}>
              Gerenciar streamings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/manage-movies')}>
              Gerenciar filmes
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/profile')}>Perfis</DropdownMenuItem>
            <DropdownMenuItem onClick={logOut}>Sair</DropdownMenuItem>
          </DropdownGroup>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

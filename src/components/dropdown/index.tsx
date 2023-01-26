import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useNavigate } from 'react-router-dom';
import {
  Trigger,
  SettingsIcon,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownGroup,
} from './style';

export function Dropdown() {
  const navigate = useNavigate();
  return (
    <DropdownMenu.Root>
      <Trigger>
        <SettingsIcon />
      </Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent>
          <DropdownGroup>
            <DropdownMenuItem onClick={() => navigate('/manage-genres')}>Gerenciar gêneros</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/manage-streamings')}>Gerenciar streamings</DropdownMenuItem>
            <DropdownMenuItem>Gerenciar filmes</DropdownMenuItem>
            <DropdownMenuItem>Perfis</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownGroup>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

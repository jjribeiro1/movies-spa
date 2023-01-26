import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  Trigger,
  SettingsIcon,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownGroup,
} from './style';

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <Trigger>
        <SettingsIcon />
      </Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent>
          <DropdownGroup>
            <DropdownMenuItem>Gerenciar gêneros</DropdownMenuItem>
            <DropdownMenuItem>Gerenciar streamings</DropdownMenuItem>
            <DropdownMenuItem>Gerenciar filmes</DropdownMenuItem>
            <DropdownMenuItem>Perfis</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownGroup>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

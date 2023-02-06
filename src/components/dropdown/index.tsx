import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/auth-service';
import { DropdownGroup, DropdownContent, DropdownMenuItem } from './style';

export function Dropdown() {
  const navigate = useNavigate();
  function logOut() {
    AuthService().logOut();
    navigate('/');
  }
  return (
    <>
      <DropdownContent side='bottom' sideOffset={10} align='end' alignOffset={20}>
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
      </DropdownContent>
    </>
  );
}

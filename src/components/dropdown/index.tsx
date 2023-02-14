import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalStorageHelper } from '../../helper/local-storage';
import { AuthService } from '../../services/auth-service';
import { DropdownGroup, DropdownContent, DropdownMenuItem } from './style';

export function Dropdown() {
  const navigate = useNavigate();
  function logOut() {
    AuthService().logOut();
    navigate('/');
  }
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const userRole = LocalStorageHelper.getItem('logged_user').role;
    userRole === 'ADMIN' ? setIsAdmin(true) : null;
  }, []);

  return (
    <>
      <DropdownContent side="bottom" sideOffset={10} align="end" alignOffset={20}>
        <DropdownGroup>
          <></>
          {isAdmin && (
            <>
              <DropdownMenuItem onClick={() => navigate('/manage-genres')}>
                Gerenciar gêneros
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/manage-streamings')}>
                Gerenciar streamings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/manage-movies')}>
                Gerenciar filmes
              </DropdownMenuItem>
            </>
          )}

          <DropdownMenuItem onClick={() => navigate('/profile')}>Perfis</DropdownMenuItem>
          <DropdownMenuItem onClick={logOut}>Sair</DropdownMenuItem>
        </DropdownGroup>
      </DropdownContent>
    </>
  );
}

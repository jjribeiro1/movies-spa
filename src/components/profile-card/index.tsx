import { Link } from 'react-router-dom';
import { Card, PopoverContent, SettingIcon } from './style';
import { Profile } from '../../types/profile-service-types';
import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';

interface ProfileCardProps {
  isEditingProfile: boolean;
  profile: Profile;
}

export function ProfileCard({ isEditingProfile, profile }: ProfileCardProps) {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <Card>
      <Popover.Root open={openPopover} onOpenChange={setOpenPopover}>
        <Link to={isEditingProfile ? '' : '/home'}>
          <Popover.Portal>
            <PopoverContent align="start" alignOffset={20} side="right" sideOffset={-80}>
              <button>Editar</button>
              <button>Deletar</button>
            </PopoverContent>
          </Popover.Portal>
          <SettingIcon
            editing={isEditingProfile ? 'true' : 'false'}
            onClick={() => setOpenPopover(true)}
          />
          <Popover.Anchor>
            <img src={profile.imageUrl} alt="imagem do perfil" />
          </Popover.Anchor>
          <span>{profile.name}</span>
        </Link>
      </Popover.Root>
    </Card>
  );
}
6;

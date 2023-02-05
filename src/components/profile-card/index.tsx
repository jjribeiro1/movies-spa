import { Link } from 'react-router-dom';
import { Card, PopoverContent, SettingIcon } from './style';
import { Profile } from '../../types/profile-service-types';
import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { RadixDialog } from '../radix-dialog';
import { UpdateProfile } from '../update-profile';

interface ProfileCardProps {
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
  isEditingProfile: boolean;
  profile: Profile;
}

export function ProfileCard({ control, setControl, isEditingProfile, profile }: ProfileCardProps) {
  const [openPopover, setOpenPopover] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  return (
    <>
      <Card>
        <Popover.Root open={openPopover} onOpenChange={setOpenPopover}>
          <Link to={isEditingProfile ? '' : '/home'}>
            <Popover.Portal>
              <PopoverContent align="start" alignOffset={20} side="right" sideOffset={-80}>
                <button onClick={() => setOpenUpdateModal(true)}>Editar</button>
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

      <RadixDialog open={openUpdateModal} onOpenChange={setOpenUpdateModal}>
        <UpdateProfile
          profile={profile}
          setOpenUpdateModal={setOpenUpdateModal}
          control={control}
          setControl={setControl}
        />
      </RadixDialog>
    </>
  );
}
6;

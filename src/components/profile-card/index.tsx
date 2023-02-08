import { Link } from 'react-router-dom';
import { Card, PopoverContent, SettingIcon } from './style';
import { Profile } from '../../types/profile-service-types';
import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { RadixDialog } from '../radix-dialog';
import { UpdateProfile } from '../profile-update';
import { RadixAlert } from '../radix-alert';
import { DeleteProfile } from '../profile-delete';
import { RadixPopover } from '../radix-popover';

interface ProfileCardProps {
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
  isEditingProfile: boolean;
  profile: Profile;
}

export function ProfileCard({ control, setControl, isEditingProfile, profile }: ProfileCardProps) {
  const [openPopover, setOpenPopover] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  return (
    <>
      <Popover.Root open={openPopover} onOpenChange={setOpenPopover}>
        <Card>
          <Link to={isEditingProfile ? '' : '/home'}>
            <Popover.Anchor>
              <SettingIcon
                editing={isEditingProfile ? 'true' : 'false'}
                onClick={() => setOpenPopover(true)}
              />
              <img src={profile.imageUrl} alt="imagem do perfil" />
            </Popover.Anchor>
            <span>{profile.name}</span>
          </Link>
          <Popover.Portal>
            <PopoverContent align="start" alignOffset={5} side="right" sideOffset={-70}>
              <button onClick={() => setOpenUpdateModal(true)}>Editar</button>
              <button onClick={() => setOpenDeleteAlert(true)}>Deletar</button>
            </PopoverContent>
          </Popover.Portal>
        </Card>
      </Popover.Root>

      <RadixDialog open={openUpdateModal} onOpenChange={setOpenUpdateModal}>
        <UpdateProfile
          profile={profile}
          setOpenUpdateModal={setOpenUpdateModal}
          control={control}
          setControl={setControl}
        />
      </RadixDialog>

      <RadixAlert open={openDeleteAlert} onOpenChange={setOpenDeleteAlert}>
        <DeleteProfile
          profileId={profile.id}
          control={control}
          setControl={setControl}
          setOpenDeleteAlert={setOpenDeleteAlert}
        />
      </RadixAlert>
    </>
  );
}
6;

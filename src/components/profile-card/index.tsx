import { Link } from 'react-router-dom';
import { Card, PopoverContent, SettingIcon } from './style';
import { Profile } from '../../types/profile-service-types';
import { useState } from 'react';
import { Root, Anchor, Portal } from '@radix-ui/react-popover';
import { RadixDialog } from '../radix-dialog';
import { UpdateProfile } from '../profile-update';
import { RadixAlert } from '../radix-alert';
import { DeleteProfile } from '../profile-delete';

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
      <Root open={openPopover} onOpenChange={setOpenPopover}>
        <Card>
          <Link to={isEditingProfile ? '' : '/home'}>
            <Anchor>
              <SettingIcon
                editing={isEditingProfile ? 'true' : 'false'}
                onClick={() => setOpenPopover(true)}
              />
              <img src={profile.imageUrl} alt="imagem do perfil" />
            </Anchor>
            <span>{profile.name}</span>
          </Link>
          <Portal>
            <PopoverContent align="start" alignOffset={5} side="right" sideOffset={-70}>
              <button onClick={() => setOpenUpdateModal(true)}>Editar</button>
              <button onClick={() => setOpenDeleteAlert(true)}>Deletar</button>
            </PopoverContent>
          </Portal>
        </Card>
      </Root>

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

import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components/profile-card';
import { LocalStorageHelper } from '../../helper/local-storage';
import { UserService } from '../../services/user-service';
import { Profile } from '../../types/profile-service-types';
import { NewProfile, ProfileList, ProfilesSection } from './style';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogContent, DialogOverlay } from '../../components/radix-dialog/style';
import { CreateProfile } from '../../components/create-profile';

export function Profiles() {
  const [userProfiles, setUserProfiles] = useState<Profile[]>([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [control, setControl] = useState(false);

  async function getProfiles() {
    const userId = LocalStorageHelper.getItem('logged_user').id;
    const user = await UserService().getById(userId);
    setUserProfiles(user.profiles);
  }

  useEffect(() => {
    getProfiles();
  }, [control]);

  return (
    <>
      <ProfilesSection>
        <ProfileList>
          {userProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </ProfileList>
        <Dialog.Root open={openCreateModal} onOpenChange={setOpenCreateModal}>
          <NewProfile>Criar novo perfil</NewProfile>
          <Dialog.Portal>
            <DialogOverlay>
              <DialogContent>
                <CreateProfile
                  setOpenCreateModal={setOpenCreateModal}
                  control={control}
                  setControl={setControl}
                />
              </DialogContent>
            </DialogOverlay>
          </Dialog.Portal>
        </Dialog.Root>
      </ProfilesSection>
    </>
  );
}

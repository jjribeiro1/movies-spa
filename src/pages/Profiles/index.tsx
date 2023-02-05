import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components/profile-card';
import { LocalStorageHelper } from '../../helper/local-storage';
import { UserService } from '../../services/user-service';
import { Profile } from '../../types/profile-service-types';
import { ConfigProfiles, NewProfile, ProfileActions, ProfileList, ProfilesSection } from './style';
import { CreateProfile } from '../../components/profile-create';
import { RadixDialog } from '../../components/radix-dialog';

export function Profiles() {
  const [userProfiles, setUserProfiles] = useState<Profile[]>([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
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
            <ProfileCard
              key={profile.id}
              isEditingProfile={isEditingProfile}
              profile={profile}
              control={control}
              setControl={setControl}
            />
          ))}
        </ProfileList>

        <ProfileActions>
          <NewProfile onClick={() => setOpenCreateModal(true)}>Criar novo perfil</NewProfile>
          <ConfigProfiles onClick={() => setIsEditingProfile(!isEditingProfile)}>
            Gerenciar Perfis
          </ConfigProfiles>
        </ProfileActions>

        <RadixDialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
          <CreateProfile
            setOpenCreateModal={setOpenCreateModal}
            control={control}
            setControl={setControl}
          />
        </RadixDialog>
      </ProfilesSection>
    </>
  );
}

import { Link } from 'react-router-dom';
import { Card, SettingIcon } from './style';
import { Profile } from '../../types/profile-service-types';

interface ProfileCardProps {
  isEditingProfile: boolean;
  profile: Profile;
}

export function ProfileCard({ isEditingProfile, profile }: ProfileCardProps) {
  return (
    <Card>
      <Link to={isEditingProfile ? '' : '/home'}>
        <SettingIcon
          editing={isEditingProfile ? 'true' : 'false'}
          onClick={() => console.log('click')}
        />
        <img src={profile.imageUrl} alt="imagem do perfil" />
        <span>{profile.name}</span>
      </Link>
    </Card>
  );
}
6;

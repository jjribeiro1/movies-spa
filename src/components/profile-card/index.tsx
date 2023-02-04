import { Link } from 'react-router-dom';
import { Card } from './style';
import { Profile } from '../../types/profile-service-types';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card>
      <Link to={'/home'}>
        <img src={profile.imageUrl} alt="imagem do perfil" />
        <span>{profile.name}</span>
      </Link>
    </Card>
  );
}6

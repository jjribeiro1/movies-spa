import { Card } from './style';
import { Profile } from '../../types/profile-service-types';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card>
      <img src={profile.imageUrl} alt="imagem do perfil" />
      <h2>{profile.name}</h2>
    </Card>
  );
}

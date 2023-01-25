import { Card, RouterDomLink } from './style';
import { Profile } from '../../types/profile-service-types';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card>
      <RouterDomLink to={'/home'}>
      <img src={profile.imageUrl} alt="imagem do perfil" />
      </RouterDomLink>
      <h2>{profile.name}</h2>
    </Card>
  );
}

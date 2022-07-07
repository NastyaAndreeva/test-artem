import userData from '../../../data/user.json';
console.log('userData: ', userData);

import { ProfileHead } from 'components/ProfileTask/ProfileHead/ProfileHead';
import { MetaInfo } from 'components/Statistics/MetaInfo/MetaInfo';

import { StyledProfile } from './Profile.styled';

export const Profile = () => {
  return (
    <StyledProfile>
      <ProfileHead
        location={userData.location}
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
      />
      <MetaInfo
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </StyledProfile>
  );
};

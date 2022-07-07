import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendTask/FriendListItem/FriendListItem';
import { StyledFriendsItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendsItem>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            name={el.name}
            onlineStatus={el.isOnline}
            avatar={el.avatar}
          />
        );
      })}
    </StyledFriendsItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

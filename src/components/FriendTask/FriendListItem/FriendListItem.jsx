import PropTypes from 'prop-types';
import {
  StyledFriendsItem,
  StyledFriendsStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ name, onlineStatus, avatar }) => {
  return (
    <StyledFriendsItem>
      <StyledFriendsStatus status={onlineStatus}></StyledFriendsStatus>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </StyledFriendsItem>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onlineStatus: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

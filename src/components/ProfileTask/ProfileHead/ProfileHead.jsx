import PropTypes from 'prop-types';

import {
  StyledHead,
  StyledUsername,
  StyledTag,
  StyledLocation,
} from './ProfileHead.styled';

export const ProfileHead = ({ username, tag, location, avatar }) => {
  return (
    <StyledHead>
      <img src={avatar} alt={username} />
      <StyledUsername>{username}</StyledUsername>
      <StyledTag>@{tag}</StyledTag>
      <StyledLocation>{location}</StyledLocation>
    </StyledHead>
  );
};

ProfileHead.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

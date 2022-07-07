import PropTypes from 'prop-types';
import {
  StyledMetaList,
  StyledMetaTitle,
  StyledMetaInfo,
} from './MetaInfo.styled';

export const MetaInfo = ({ followers, views, likes }) => {
  return (
    <StyledMetaList>
      <li>
        <StyledMetaTitle>Followers</StyledMetaTitle>
        <StyledMetaInfo>{followers}</StyledMetaInfo>
      </li>
      <li>
        <StyledMetaTitle>Views</StyledMetaTitle>
        <StyledMetaInfo>{views}</StyledMetaInfo>
      </li>
      <li>
        <StyledMetaTitle>Likes</StyledMetaTitle>
        <StyledMetaInfo>{likes}</StyledMetaInfo>
      </li>
    </StyledMetaList>
  );
};

MetaInfo.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

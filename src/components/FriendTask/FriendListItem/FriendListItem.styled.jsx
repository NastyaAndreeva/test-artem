import styled from '@emotion/styled';

export const StyledFriendsItem = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  width: 80%;
  height: 50%;
  padding: 10px;

  background-color: #d3edff;
  border: 2px solid #000;
  border-radius: 10px;

  img {
    margin-right: 30px;
    margin-left: 10px;
  }
`;

export const StyledFriendsStatus = styled.span`
  width: 10px;
  height: 10px;

  border: 1px solid #000;
  border-radius: 2px;
  background-color: ${p => {
    if (p.status) {
      return '#2cc234';
    } else {
      return '#ac2b2b';
    }
  }};
`;

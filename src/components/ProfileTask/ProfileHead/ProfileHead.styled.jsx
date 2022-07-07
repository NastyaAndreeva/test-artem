import styled from '@emotion/styled';

export const StyledHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  img {
    width: 50%;
    background-color: #979797;
    border-radius: 10px;
    padding: 5px;
  }
`;

export const StyledUsername = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

export const StyledTag = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #6e6e6e;
  margin-top: 0;
`;

export const StyledLocation = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #6e6e6e;
  margin: 0;
`;

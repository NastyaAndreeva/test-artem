import styled from '@emotion/styled';

export const StyledMetaList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  border-top: 1px solid;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 5px;
    font-size: 10px;
    font-weight: 200;
  }

  & li:nth-of-type(2) {
    border-right: 1px solid #000;
    border-left: 1px solid #000;
  }
`;

export const StyledMetaTitle = styled.span`
  font-weight: 300;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const StyledMetaInfo = styled.span`
  font-weight: 400;
`;

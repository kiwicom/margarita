// @flow

import styled from 'styled-components';

export const CardItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardItem = styled.div`
  flex: 1;
  margin: 20px 0;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 50px;
  flex-basis: 240px;
  min-width: 240px;
  &:last-child {
    padding-right: 0px;
  }
`;

export const CardDescription = styled.div`
  font-size: 16px;
  font-weight: normal;
`;

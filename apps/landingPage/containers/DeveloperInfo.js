// @flow

import React from 'react';
import styled from 'styled-components';

import Content from '../components/Content';

export default function DeveloperInfo() {
  return (
    <>
      <a name="developer-info" />
      <Content>
        <Items>
          <Item>
            <Image number={1} />
          </Item>
          <Item>
            <Image number={2} />
          </Item>
          <Item>
            <Image number={3} />
          </Item>
        </Items>
      </Content>
    </>
  );
}
const Items = styled.div`
  display: flex;
  flex-direction: row;
`;
const Item = styled.div`
  flex-grow: 1;
`;
const Image = styled.div`
  width: 120px;
  height: 120px;
  align-items: center;
  background: url('/static/developer-info${props =>
    props.number}.jpg') no-repeat center center;
  background-size: contain;
  display: flex;
  z-index: 1;
  flex-direction: column;

`;

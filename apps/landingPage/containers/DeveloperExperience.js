// @flow

import React from 'react';
import styled from 'styled-components';

import Content from '../components/Content';
import Highlight from '../components/Highlight';

export default function DeveloperInfo() {
  return (
    <Content id="developer-experience">
      <Items>
        <Item>
          <ImageContainer>
            <Image
              src="/static/icon-multi-platform.jpg"
              srcSet={`/static/icon-multi-platform.jpg 1x,
                /static/icon-multi-platform@2x.jpg 2x, /static/icon-multi-platform@3x.jpg 3x`}
              alt="Multiplatform app"
            />
          </ImageContainer>
          <Text>Truly </Text>
          <HighlightLeftOffset>multi-platform app </HighlightLeftOffset>
          <Description>
            One codebase for iOS, Android and web. And with user experience like
            in native apps.
          </Description>
        </Item>
        <Item>
          <ImageContainer>
            <Image
              src="/static/icon-modern-technologies.jpg"
              srcSet={`/static/icon-modern-technologies.jpg 1x,
                /static/icon-modern-technologies@2x.jpg 2x, /static/icon-modern-technologies@3x.jpg 3x`}
              alt="React logo"
            />
          </ImageContainer>
          <Text>Developed with </Text>
          <HighlightLeftOffset>modern technologies</HighlightLeftOffset>
          <Description>
            React Native and GraphQL are battle-tested modern technologies for
            the best developer experience.
          </Description>
        </Item>
        <Item>
          <ImageContainer>
            <Image
              src="/static/icon-open-source.jpg"
              srcSet={`/static/icon-open-source.jpg 1x,
                /static/icon-open-source@2x.jpg 2x, /static/icon-open-source@3x.jpg 3x`}
              alt="Open-source licence"
            />
          </ImageContainer>
          <Text>API is free and </Text>
          <HighlightLeftOffset block>app is open-sourced</HighlightLeftOffset>
          <Description>
            There are no fees. Even our API is free and bought tickets have the
            same price like on Kiwi. You can fork Margarita and use it for
            whatever.
          </Description>
        </Item>
      </Items>
    </Content>
  );
}
const Items = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;
const Item = styled.div`
  flex: 1;
  margin: 20px 0;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 20px;
  flex-basis: 300px;
  min-width: 300px;
`;
const Image = styled.img`
  width: 120px;
`;
const ImageContainer = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const HighlightLeftOffset = styled(Highlight)`
  position: relative;
  left: -5px;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-top: 20px;
`;

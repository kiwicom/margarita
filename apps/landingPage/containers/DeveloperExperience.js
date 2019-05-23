// @flow

import React from 'react';
import styled from 'styled-components';
import { Separator } from '@kiwicom/orbit-components/lib/';

import Content from '../components/Content';
import Highlight from '../components/Highlight';
import AccentedText from '../components/AccentedText';
import { CardItems, CardItem, CardDescription } from '../components/Card';
import Title from '../components/Title';

export default function DeveloperInfo() {
  return (
    <CenteredContainer id="developer-experience">
      <Separator />
      <Content>
        <Title>Technology</Title>
        <CardItems>
          <CardItem>
            <ImageContainer>
              <Image
                src="/static/icon-multi-platform.png"
                srcSet={`/static/icon-multi-platform.png 1x,
                /static/icon-multi-platform@2x.png 2x, /static/icon-multi-platform@3x.png 3x`}
                alt="Multiplatform app"
              />
            </ImageContainer>
            <CardTitle>Real </CardTitle>
            <HighlightLeftOffset>multi-platform app </HighlightLeftOffset>
            <CardDescriptionTopMargin>
              One codebase for iOS, Android and web. And with user experience
              like in native apps.
            </CardDescriptionTopMargin>
          </CardItem>
          <CardItem>
            <ImageContainer>
              <Image
                src="/static/icon-modern-technologies.png"
                srcSet={`/static/icon-modern-technologies.png 1x,
                /static/icon-modern-technologies@2x.png 2x, /static/icon-modern-technologies@3x.png 3x`}
                alt="React logo"
              />
            </ImageContainer>
            <CardTitle>Developed with </CardTitle>
            <HighlightLeftOffset>modern technologies</HighlightLeftOffset>
            <CardDescriptionTopMargin>
              React Native and GraphQL are battle-tested modern technologies for
              the best developer experience.
            </CardDescriptionTopMargin>
          </CardItem>
          <CardItem>
            <ImageContainer>
              <Image
                src="/static/icon-open-source.png"
                srcSet={`/static/icon-open-source.png 1x,
                /static/icon-open-source@2x.png 2x, /static/icon-open-source@3x.png 3x`}
                alt="Open-source licence"
              />
            </ImageContainer>
            <CardTitle>API is free and </CardTitle>
            <HighlightLeftOffset block>app is open-sourced</HighlightLeftOffset>
            <CardDescriptionTopMargin>
              There are no fees. Not only we provide you with a free API, you
              can even collect your commission for each single booking coming
              through your app! Fork Margarita and use it for whatever.
            </CardDescriptionTopMargin>
          </CardItem>
        </CardItems>
      </Content>
    </CenteredContainer>
  );
}
const CardTitle = styled(AccentedText)`
  margin-top: 20px;
`;
const Image = styled.img`
  width: 120px;
`;
const CenteredContainer = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
`;
const HighlightLeftOffset = styled(Highlight)`
  position: relative;
  left: -5px;
  margin-bottom: 20px;
`;

const CardDescriptionTopMargin = styled(CardDescription)`
  margin-top: 20px;
`;

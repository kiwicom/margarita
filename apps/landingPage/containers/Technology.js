// @flow

import React from 'react';
import styled from 'styled-components';
import { Separator } from '@kiwicom/orbit-components/lib/';

import Content from '../components/Content';
import AccentedText from '../components/AccentedText';
import { CardItems, CardItem, CardDescription } from '../components/Card';
import Title from '../components/Title';

export default function Technology() {
  return (
    <ContentWrapper id="developer-experience">
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
            <CardTitle>
              Real
              <br />
              multi-platform app
            </CardTitle>
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
            <CardTitle>
              Developed with
              <br />
              modern technologies
            </CardTitle>
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
            <CardTitle>
              API is free and
              <br />
              app is open-sourced
            </CardTitle>
            <CardDescriptionTopMargin>
              There are no fees. Not only we provide you with a free API, you
              can even collect your commission for each single booking coming
              through your app! Fork Margarita and use it for whatever.
            </CardDescriptionTopMargin>
          </CardItem>
        </CardItems>
      </Content>
    </ContentWrapper>
  );
}
const CardTitle = styled(AccentedText)`
  margin-top: 20px;
`;
const Image = styled.img`
  width: 120px;
`;
const ContentWrapper = styled.div`
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

const CardDescriptionTopMargin = styled(CardDescription)`
  margin-top: 20px;
`;

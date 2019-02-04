// @flow

import React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

type Props = {|
  +iframeWidth: number,
|};

export default ({ iframeWidth }: Props) => (
  <Headline>
    <HeadlineTextContainer>
      <HeadlineTextTop>
        <Heading type="display">
          Ever dreamt of building the next Kiwi.com?
        </Heading>
      </HeadlineTextTop>
      <HeadlineTextBottom>
        <Heading type="title2">
          You've had a look at Tequila, but you've always preffered your Tequila
          mixed with something else. Just grab a Margarita.
        </Heading>
      </HeadlineTextBottom>
    </HeadlineTextContainer>
    <PlaneImage />
    <Text type="secondary" size="large" italic={true}>
      Margarita is an example project of what you can build with{' '}
      <StyledLink href="https://tequila.kiwi.com/portal/login">
        Tequila
      </StyledLink>
    </Text>
  </Headline>
);

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.iframeWidth}px;
`;

const HeadlineTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  height: 30vh;
  justify-content: center;
  padding-left: 6vw;
`;

const HeadlineTextTop = styled.div`
  display: flex;
  width: 25vw;
  flex-wrap: wrap;
  padding: 2vh;
`;

const HeadlineTextBottom = styled.div`
  display: flex;
  width: 37vw;
  flex-wrap: wrap;
  padding: 2vh;
`;

const PlaneImage = styled.div`
  width: 76vw;
  padding: 8vh 0 6vh 0;
  justify-content: center;
  display: flex;
  height: 40vh;
  margin-bottom: 4vh;
  background-image: url(https://tequila.kiwi.com/portal/static/media/airport-runway.4acb8968.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const StyledLink = styled.a`
  color: ${defaultTokens.colorTextSecondary};
`;

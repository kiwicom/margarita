// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from '@kiwicom/orbit-components/lib/';
import { JOBS_LINK } from '@kiwicom/margarita-config';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Content from '../components/Content';
import Title from '../components/Title';
import AccentedText from '../components/AccentedText';
import { EventGithubStar, EventKiwiJobs } from '../config/GA';

export default function Technology() {
  return (
    <Content>
      <Title>Do you like Margarita?</Title>
      <Row>
        <StarContainer>
          <AccentedText>Give us a star</AccentedText>
          <Text>Tell us that you like our Github repository</Text>
          <GithubLink
            src="https://ghbtns.com/github-btn.html?user=kiwicom&repo=margarita&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="160px"
            height="30px"
            onClick={EventGithubStar}
          />
        </StarContainer>
        <JoinUsContainer>
          <AccentedText>Join the team</AccentedText>
          <Text>And help us make Margarita even better</Text>
          <JoinUsButtonContainer>
            <Button circled href={JOBS_LINK} external onClick={EventKiwiJobs}>
              See open positions
            </Button>
          </JoinUsButtonContainer>
        </JoinUsContainer>
      </Row>
    </Content>
  );
}
const JoinUsButtonContainer = styled.div`
  padding-top: ${defaultTokens.spaceLarge};
`;
const Row = styled.div`
  margin-top: 35px;
  @media (min-width: ${defaultTokens.widthBreakpointTablet}px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
const Text = styled.div`
  margin-top: ${defaultTokens.spaceXSmall};
`;
const GithubLink = styled.iframe`
  margin-top: ${defaultTokens.spaceXLarge};
`;

const StarContainer = styled.div`
  padding-bottom: ${defaultTokens.spaceXXXLarge};
  @media (min-width: ${defaultTokens.widthBreakpointTablet}px) {
    padding-left: 40px;
  }
`;
const JoinUsContainer = styled.div``;

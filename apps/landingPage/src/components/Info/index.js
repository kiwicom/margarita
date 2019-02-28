// @flow

import React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import { documentation, github } from '../../../../../linksConfig';
import { BREAKPOINTS } from '../../mediaQueriesConfig';
import { withWindowSize } from '../withWindowSize';
import Screenshots from './Screenshots';
import ButtonLink from './ButtonLink';
import Features, { Title } from './Features';

const text =
  "PLACEHOLDER!!!!!You've had a look at Tequila, but you've preffered yourTequila Tequila mixed with something else. Just grabMargarita.You've had a look at Tequila, but you've always prefferedyour Tequila mixed with something else.u've had a look at Tequ";

type Props = {|
  +width: number,
|};

class Info extends React.Component<Props> {
  render() {
    const alignment =
      this.props.width < BREAKPOINTS.BIG_MOBILE ? 'left' : 'center';
    const isMobile = this.props.width <= BREAKPOINTS.BIG_MOBILE;
    const buttonAlignment = isMobile ? 'flex-start' : 'center';
    return (
      <Container id="features">
        <Header>
          <Title>
            <Heading>It's cross-platform</Heading>
          </Title>
          <WrapperText>
            <Text size="large" align={alignment}>
              {text}
            </Text>
          </WrapperText>
          <ButtonLink
            alignment={buttonAlignment}
            link={documentation}
            text="Link to Docs"
          />
        </Header>
        <Screenshots />
        <Features />
        {this.props.width < BREAKPOINTS.TABLET && (
          <GithubButtonWrapper>
            <Heading> Learn more, visit Github</Heading>
            <ButtonLink
              alignment={buttonAlignment}
              link={github}
              text="Link to Github"
            />
          </GithubButtonWrapper>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 240px;
  padding-bottom: 40px;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    height: 250px;
    padding-bottom: 60px;
  }
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 80vw;
    margin: 0;
  }
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 600px;
    margin: 3vh 0 2vh 0;
  }
`;

const GithubButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  height: 140px;
  justify-content: space-evenly;
`;

export default withWindowSize<Props>(Info);

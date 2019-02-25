// @flow

import React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import { github, margarita } from '../../../../linksConfig';
import { BREAKPOINTS } from '../mediaQueriesConfig';
import { withWindowSize } from './withWindowSize';

type Props = {|
  +width: number,
|};

class GetStartedInfo extends React.Component<Props> {
  render() {
    const isTablet = this.props.width <= BREAKPOINTS.TABLET;
    const buttonSize = isTablet ? 'large' : 'normal';
    return (
      <ContainerLeftText>
        <Heading>Get started</Heading>
        <WrapperText>
          <Text size="large">
            PLACEHOLDER!!!!!You've had a look at Tequila, but you've preffered
            yourTequila Tequila mixed with something else. Just grab
            Margarita.You've had a look at Tequila, but you've always preffered
            your Tequila mixed with something else.
          </Text>
        </WrapperText>
        <WrapperButtons>
          <Button block={isTablet || false} size={buttonSize}>
            <LinkWithoutStyle
              href={margarita}
              color={defaultTokens.paletteWhite}
            >
              Get started
            </LinkWithoutStyle>
          </Button>
          <WrapperRightButton>
            <Button type="white" block={isTablet || false} size={buttonSize}>
              <LinkWithoutStyle
                href={github}
                color={defaultTokens.colorTextButtonSecondary}
              >
                Link to Github
              </LinkWithoutStyle>
            </Button>
          </WrapperRightButton>
        </WrapperButtons>
      </ContainerLeftText>
    );
  }
}

const ContainerLeftText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 26vw;
  height: 300px;
  padding-left: 8vw;

  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 80vw;
    padding-left: 0;
    padding-top: 4vh;
    align-items: center;
  }
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    align-items: flex-start;
  }
`;

const WrapperText = styled.div`
  width: 25vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 85vw;
  }
`;

const WrapperButtons = styled.div`
  display: flex;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 60vw;
    flex-direction: column;
    margin-top: 20px;
  }
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 80vw;
  }
`;

const WrapperRightButton = styled.div`
  margin-left: 1vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    margin: 10px 0 0 0;
  }
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
  color: ${props => props.color};
`;

export default withWindowSize<Props>(GetStartedInfo);

// @flow

import React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import { github, margarita } from '../../../../../linksConfig';
import { BREAKPOINTS } from '../../mediaQueriesConfig';
import { withWindowSize } from '../withWindowSize';

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
  height: 320px;
  width: 80vw;
  padding-left: 0;
  padding-top: 4vh;
  align-items: flex-start;

  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET}px) {
    align-items: center;
  }
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    flex-direction: 'row';
    width: 26vw;
    padding: 0 0 0 8vw;
    height: 280px;
  }
`;

const WrapperText = styled.div`
  width: 85vw;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 25vw;
  }
`;

const WrapperButtons = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}) and (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 60vw;
  }
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: unset;
    flex-direction: row;
  }
`;

const WrapperRightButton = styled.div`
  margin-top: 10px;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    margin: 0 0 0 1vw;
  }
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
  color: ${props => props.color};
`;

export default withWindowSize<Props>(GetStartedInfo);

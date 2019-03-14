// @flow

import React from 'react';
import { Heading, Text, Stack } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';
import { GITHUB_LINK, MARGARITA_LINK } from '@kiwicom/margarita-config';

import { BREAKPOINTS } from '../../mediaQueriesConfig';
import ButtonInfo from './ButtonInfo';

export default function GetStartedInfo() {
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
      <Stack
        direction="column"
        grow={false}
        justify="center"
        largeMobile={{
          direction: 'row',
          justify: 'center',
        }}
        tablet={{
          direction: 'row',
          justify: 'center',
        }}
        desktop={{
          justify: 'start',
        }}
      >
        <ButtonInfo
          type="primary"
          link={MARGARITA_LINK}
          color={defaultTokens.paletteWhite}
          text="Get started"
        />
        <ButtonInfo
          type="white"
          link={GITHUB_LINK}
          color={defaultTokens.colorTextButtonSecondary}
          text="Link to Github"
        />
      </Stack>
    </ContainerLeftText>
  );
}

const ContainerLeftText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 85vw;
  padding-left: 0;
  padding-top: 4vh;
  align-items: flex-start;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET}px) {
    align-items: center;
  }
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (max-width: ${BREAKPOINTS.BIG_TABLET}px) {
    align-items: center;
  }
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    flex-direction: column;
    width: 60vw;
    height: 230px;
  }
  @media (min-width: ${BREAKPOINTS.BIG_TABLET}px) {
    align-items: flex-start;
    width: 26vw;
    padding: 0 0 0 8vw;
    height: 280px;
  }
`;

const WrapperText = styled.div`
  width: 85vw;
  padding: ${defaultTokens.spaceMedium} 0 ${defaultTokens.spaceMedium} 0;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 75vw;
  }
  @media (min-width: ${BREAKPOINTS.BIG_TABLET}px) {
    width: 25vw;
  }
`;

// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../mediaQueriesConfig';

const features = ['Search', 'Booking', 'MMB', 'Payments'];

type Props = {|
  +features: $ReadOnlyArray<string>,
|};

const RenderCards = ({ features }: Props) => {
  return features.map(feature => (
    <CardWrapper key={feature}>
      <Heading type="title2">{feature}</Heading>
    </CardWrapper>
  ));
};

export default function Features() {
  return (
    <Container>
      <Title>
        <Heading>Features</Heading>
      </Title>
      <CardListWrapper>
        <RenderCards features={features} />
      </CardListWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  align-self: flex-start;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    align-self: center;
  }
`;

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  padding-top: 40px;
  flex-wrap: wrap;
  flex-direction: column;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    flex-direction: row;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 125px;
  margin-bottom: 20px;
  box-shadow: ${defaultTokens.boxShadowActionable};
  border-radius: ${defaultTokens.borderRadiusNormal};
  border: ${defaultTokens.borderStyleCard} ${defaultTokens.borderWidthCard}
    ${defaultTokens.borderColorCard};
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 270px;
    height: 100px;
  }
`;

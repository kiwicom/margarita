// @flow

import React from 'react';
import { Text, Heading } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {|
  +iframeWidth: number,
  +iframeHeight: number,
|};

export default ({ iframeWidth, iframeHeight }: Props) => (
  <Container>
    <ContainerDark>
      <Heading>Just try it out!</Heading>
      <Iframe
        title="demo"
        width={iframeWidth}
        height={iframeHeight}
        src="https://kiwicom-margarita.netlify.com/"
      />
      <ContainerTextBottom>
        <Heading type="title2">Excited to know more!</Heading>
        <Text>
          <Heading type="title2">
            Just chekout the{' '}
            <ColoredLink
              color="black"
              href="https://github.com/kiwicom/margarita/"
            >
              repository
            </ColoredLink>{' '}
            or follow the{' '}
            <ColoredLink
              href="https://github.com/kiwicom/margarita/#installing--getting-started"
              color="black"
            >
              instructions
            </ColoredLink>
          </Heading>
        </Text>
      </ContainerTextBottom>
    </ContainerDark>
    <Text size="large" italic={true}>
      If you don't like{' '}
      <ColoredLink
        color={defaultTokens.colorTextPrimary}
        href="https://tequila.kiwi.com/portal/login"
      >
        Tequila
      </ColoredLink>{' '}
      alone, grab a{' '}
      <ColoredLinkGatsby color={defaultTokens.colorTextPrimary} to="/">
        Margarita
      </ColoredLinkGatsby>
    </Text>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContainerDark = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f7f9;
  height: 95vh;
  width: 76vw;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  margin-bottom: 3vh;
`;

const Iframe = styled.iframe`
  border: none;
  background-color: #fff;
`;

const ContainerTextBottom = styled.div`
  display: flex;
  width: 50vw;
  justify-content: space-evenly;
  padding: 2vh 0 2vh 0;
`;

const ColoredLink = styled.a`
  color: ${props => props.color};
`;

const ColoredLinkGatsby = styled(Link)`
  color: ${props => props.color};
`;

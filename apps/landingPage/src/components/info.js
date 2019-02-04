// @flow

import React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import ios from '../images/ios.png';
import android from '../images/android.png';
import web from '../images/web.png';

type Props = {|
  +iframeWidth: number,
|};

export default ({ iframeWidth }: Props) => (
  <>
    <ContainerTop>
      <Header>
        <Heading>It's cross-platform</Heading>
        <Text size="large">Works on IOS , Android and on the web!</Text>
      </Header>
      <ContainerShowcase width={iframeWidth}>
        <Titles>
          <Heading type="title2">IOS</Heading>
          <Heading type="title2">Android</Heading>
          <Heading type="title2">Web</Heading>
        </Titles>
        <div style={{ display: 'flex' }}>
          <img src={ios} alt="ios" height={500} />
          <img src={android} alt="android" height={500} />
          <img src={web} alt="web" height={500} />
        </div>
      </ContainerShowcase>
    </ContainerTop>
    <ContainerInfo>
      <ContainerHeaderBottom>
        <Heading>It has these new features</Heading>
      </ContainerHeaderBottom>
      <ContainerInfoBottom width={iframeWidth}>
        <Info>
          <Text>
            {' '}
            SEARCH Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum sagittis efficitur ante, a gravida urna varius in.
            Maecenas ac nulla enim. Praesent lacinia accumsan congue. Quisque
            dapibus, eros id vestibulum condimentum, nunc elit lacinia urna,
            vitae porttitor tortor lorem sit amet erat. Phasellus ut dolor est.
            Nulla tincidunt at tellus sed posuere. Vestibulum efficitur vehicula
            est, eget egestas ex varius nec.
          </Text>
        </Info>
        <Info>
          <Text>
            {' '}
            BOOKING Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum sagittis efficitur ante, a gravida urna varius in.
            Maecenas ac nulla enim. Praesent lacinia accumsan congue. Quisque
            dapibus, eros id vestibulum condimentum, nunc elit lacinia urna,
            vitae porttitor tortor lorem sit amet erat. Phasellus ut dolor est.
            Nulla tincidunt at tellus sed posuere. Vestibulum efficitur vehicula
            est, eget egestas ex varius nec.
          </Text>
        </Info>
        <Info>
          <Text>
            {' '}
            BOOKING MANAGEMENTLorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum sagittis efficitur ante, a gravida urna varius in.
            Maecenas ac nulla enim. Praesent lacinia accumsan congue. Quisque
            dapibus, eros id vestibulum condimentum, nunc elit lacinia urna,
            vitae porttitor tortor lorem sit amet erat. Phasellus ut dolor est.
            Nulla tincidunt at tellus sed posuere. Vestibulum efficitur vehicula
            est, eget egestas ex varius nec.
          </Text>
        </Info>
      </ContainerInfoBottom>
    </ContainerInfo>
  </>
);

const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 6vh;
  justify-content: space-between;
  align-self: flex-start;
  padding-left: 7vw;
`;

const ContainerShowcase = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width}px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 35vh;
  justify-content: space-evenly;
  align-items: center;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  justify-content: space-around;
`;

const ContainerHeaderBottom = styled.div`
  align-self: flex-start;
  padding-left: 7vw;
`;

const ContainerInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width}px;
`;

const Info = styled.div`
  display: flex;
  width: 30%;
`;

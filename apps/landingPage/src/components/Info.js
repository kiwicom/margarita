// @flow

import React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import placeholderPhone from '../images/ios-frame.png';
import { documentation } from '../../../../linksConfig';

type Props = {|
  +iframeWidth: number,
|};

const features = ['Search', 'Booking', 'MMB', 'Payments'];

export default ({ iframeWidth }: Props) => (
  <Container id="features">
    <Header>
      <Heading>It's cross-platform</Heading>
      <WrapperText>
        <Text size="large" align="center">
          PLACEHOLDER!!!!!You've had a look at Tequila, but you've preffered
          yourTequila Tequila mixed with something else. Just grab
          Margarita.You've had a look at Tequila, but you've always preffered
          your Tequila mixed with something else.u've had a look at Tequ
        </Text>
      </WrapperText>
      <Button type="secondary" width={125}>
        <LinkNoStyle href={documentation}>Link to Docs</LinkNoStyle>
      </Button>
    </Header>
    <ImagesAndGradientWrapper>
      <BackgroundGradientAccent />
      <PhoneImage src={placeholderPhone} alt="placeholder" />
      <PhoneImage src={placeholderPhone} alt="placeholder" />
      <PhoneImage src={placeholderPhone} alt="placeholder" />
    </ImagesAndGradientWrapper>
    <ContainerBottom>
      <Heading>Features</Heading>
      <WrapperBoxes>
        {features.map(feature => (
          <Box key={feature}>
            <Heading type="title2">{feature}</Heading>
          </Box>
        ))}
      </WrapperBoxes>
    </ContainerBottom>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  padding-bottom: 60px;
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;
  margin: 3vh 0 2vh 0;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  color: ${defaultTokens.colorTextButtonSecondary};
`;

const PhoneImage = styled.img`
  height: 600px;
  margin: 0 2vw 0 2vw;
`;

const ImagesAndGradientWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BackgroundGradientAccent = styled.div`
  position: absolute;
  z-index: -1;
  height: 70vh;
  width: 100vw;
  margin-top: 300px;
  background-image: linear-gradient(
    #e9eef1,
    10%,
    ${defaultTokens.paletteWhite}
  );
`;

const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 50px 0 40px 0;
`;

const WrapperBoxes = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  padding-top: 40px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 260px;
  box-shadow: ${defaultTokens.boxShadowActionable};
  border-radius: ${defaultTokens.borderRadiusNormal};
  border: ${defaultTokens.borderStyleCard} ${defaultTokens.borderWidthCard}
    ${defaultTokens.borderColorCard};
`;

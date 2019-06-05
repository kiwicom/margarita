// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Button, Separator } from '@kiwicom/orbit-components/lib/';
import { Link } from 'react-scroll';
import Airplane from '@kiwicom/orbit-components/lib/icons/Airplane';
import CreditCard from '@kiwicom/orbit-components/lib/icons/CreditCard';
import BaggageChecked from '@kiwicom/orbit-components/lib/icons/BaggageChecked';
import Settings from '@kiwicom/orbit-components/lib/icons/Settings';

import Content from '../components/Content';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import FloatedPhone from '../components/FloatedPhone';
import Config from '../config';

type Props = {|
  +scroll: number,
|};

type State = {|
  +featuresHeight: number,
  +featuresTopPosition: number,
  +featuresRef: ?Element,
  +scrolledOnFeature: ?number,
|};

const buffer = 150;

export default class Features extends React.Component<Props, State> {
  static findPosition = (ref: ?Element) => {
    const DOMNode = ReactDOM.findDOMNode(ref);
    if (DOMNode && DOMNode instanceof Element)
      return DOMNode.getBoundingClientRect();
    return null;
  };

  state = {
    featuresHeight: 0,
    featuresTopPosition: 0,
    featuresRef: null,
    scrolledOnFeature: null,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    const featuresPosition = Features.findPosition(state.featuresRef);
    if (featuresPosition) {
      const newFeaturesTopPosition = featuresPosition.top + props.scroll;
      if (state.featuresTopPosition !== newFeaturesTopPosition) {
        return {
          featuresTopPosition: newFeaturesTopPosition,
          featuresHeight: featuresPosition.height,
        };
      }
    }
    return null;
  }

  setRef = (ref: ?Element) => {
    this.setState({ featuresRef: ref });
  };

  render() {
    const {
      featuresRef,
      featuresTopPosition,
      featuresHeight,
      scrolledOnFeature,
    } = this.state;
    const { scroll } = this.props;
    const {
      searchScreen,
      bookingScreen,
      mmbScreen,
      paymentsScreen,
    } = Config.featuresOrderIndexes;

    const isDimensionsDataKnown = featuresHeight && featuresTopPosition;

    const isFixed =
      featuresTopPosition === 0 ||
      featuresHeight === 0 ||
      scroll <
        featuresTopPosition +
          featuresHeight -
          Config.phoneHeight -
          Config.phoneTopMargin;

    const newScrollOnFeature = isDimensionsDataKnown
      ? Math.floor(
          (featuresTopPosition +
            featuresHeight -
            scroll -
            Config.phoneHeight -
            Config.featuresMarginBottom +
            buffer) /
            Config.featureHeight,
        )
      : null;
    if (scrolledOnFeature !== newScrollOnFeature) {
      this.setState({ scrolledOnFeature: newScrollOnFeature });
    }
    const isSearchScreenActive = searchScreen === scrolledOnFeature;
    const isBookingScreenActive = bookingScreen === scrolledOnFeature;
    const isMmbScreenActive = mmbScreen === scrolledOnFeature;
    const isPaymentsScreenActive = paymentsScreen === scrolledOnFeature;
    return (
      <ContentWrapper id="multiplatform" ref={this.setRef}>
        <Content>
          <MultiplatformWrapper>
            <PhotoWrapper>
              <Photo
                src="/static/android.png"
                srcSet={`/static/android.png 1x,
            /static/android@2x.png 2x, /static/android@3x.png 3x`}
                alt="Android"
              />
              <Photo
                src="/static/mac.png"
                srcSet={`/static/mac.png 1x,
            /static/mac@2x.png 2x, /static/mac@3x.png 3x`}
                alt="Mac"
              />
            </PhotoWrapper>
            <MultiplatformText>
              <Subtitle>Multi-platform travel app</Subtitle>
              <Text>
                For all major platforms — one code for web, iOS and Android.
                This is revolutionary.
              </Text>
            </MultiplatformText>

            <LinkWithoutStyle
              href="#features"
              to="features"
              {...Config.sharedLinkProps}
            >
              <Button circled>See App features</Button>
            </LinkWithoutStyle>
          </MultiplatformWrapper>
        </Content>
        <Separator />
        <Content>
          <FeaturesContainer id="features">
            <Title>App features</Title>
            <Feature>
              <ZoomedContainer big isDisabled={!isSearchScreenActive}>
                <IconContainer>
                  <Airplane size="large" />
                </IconContainer>
                <Subtitle>Search for flights</Subtitle>
                <Text isDisabled={!isSearchScreenActive}>
                  Get an access to the database of 15 billion connections
                  virtually interlined by Kiwi.com
                </Text>
              </ZoomedContainer>
            </Feature>
            <Feature>
              <ZoomedContainer big isDisabled={!isBookingScreenActive}>
                <IconContainer>
                  <BaggageChecked size="large" />
                </IconContainer>
                <Subtitle>Booking</Subtitle>
                <Text isDisabled={!isBookingScreenActive}>
                  Use our powerful infrastructure to book the trips and gain
                  your commission - the best one in the industry.
                </Text>
              </ZoomedContainer>
            </Feature>
            <Feature>
              <ZoomedContainer big isDisabled={!isMmbScreenActive}>
                <IconContainer>
                  <Settings size="large" />
                </IconContainer>
                <Subtitle>Manage my booking</Subtitle>
                <Text isDisabled={!isMmbScreenActive}>
                  It allows your customers to modify the trip, edit passenger’s
                  details or purchase additional services.
                </Text>
              </ZoomedContainer>
            </Feature>
            <Feature>
              <ZoomedContainer big isDisabled={!isPaymentsScreenActive}>
                <IconContainer>
                  <CreditCard size="large" />
                </IconContainer>
                <Subtitle>Payments</Subtitle>
                <Text>
                  Payments allow your users to pay instantly for their bookings,
                  right within your app.
                </Text>
              </ZoomedContainer>
            </Feature>
          </FeaturesContainer>

          {featuresRef !== null && (
            <FloatedPhone
              isFixed={isFixed}
              scrolledOnFeature={scrolledOnFeature}
            />
          )}
        </Content>
      </ContentWrapper>
    );
  }
}

const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const IconContainer = styled.div`
  display: none;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    display: block;
    position: absolute;
    left: -55px;
    top: 36px;
    color: #ccc;
  }
`;

const ZoomedContainer = styled.div`
  position: relative;
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    transition: all 0.3s ease;
    transform-origin: center left;
    color: #aaa;
    ${({ isDisabled }) =>
      isDisabled ? null : 'transform: scale(1.05, 1.05);color: black;'}
  }
`;

const MultiplatformWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    padding-right: ${Config.phoneWidth}px;
    scroll-snap-align: start;
    scroll-snap-type: y proximity;
  }
`;
const MultiplatformText = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
`;
const FeaturesContainer = styled.div`
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    margin-top: 30px;
    margin-bottom: ${Config.featuresMarginBottom}px;
  }
`;
const Feature = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    padding: 0 ${Config.phoneWidthBuffer}px 0 0;
    height: ${Config.featureHeight}px;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  transition: all 0.05s linear;
  position: relative;
`;
const Photo = styled.img`
  display: inline-block;
  height: 200px;
  padding-right: 50px;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    height: 300px;
  }
  @media (min-width: ${defaultTokens.widthBreakpointTablet}px) {
    height: 400px;
  }
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    height: 500px;
  }
`;
const LinkWithoutStyle = styled(Link)`
  text-decoration: none;
`;
const Text = styled.div`
  font-size: 19px;
  line-height: 30px;

  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    font-size: 21px;
    line-height: 30px;
  }
`;

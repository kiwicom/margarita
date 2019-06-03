// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Button } from '@kiwicom/orbit-components/lib/';
import { Link } from 'react-scroll';

import Content from '../components/Content';
import Highlight from '../components/Highlight';
import AccentedText from '../components/AccentedText';
import Title from '../components/Title';
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
      <Content id="multiplatform" ref={this.setRef}>
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
            <AccentedText big>
              <Highlight>Multi-platform travel app</Highlight> for all major
              platforms — one code for web, iOS and Android. This is
              revolutionary.
            </AccentedText>
          </MultiplatformText>

          <LinkWithoutStyle
            href="#features"
            to="features"
            {...Config.sharedLinkProps}
          >
            <Button circled>See App features</Button>
          </LinkWithoutStyle>
        </MultiplatformWrapper>
        <FeaturesContainer id="features">
          <Title>App features</Title>
          <Feature>
            <AccentedZoomedText big isDisabled={!isSearchScreenActive}>
              <Highlight>Search for flights.</Highlight> Get an access to the
              database of 15 billion connections virtually interlined by
              Kiwi.com
            </AccentedZoomedText>
          </Feature>
          <Feature>
            <AccentedZoomedText big isDisabled={!isBookingScreenActive}>
              <Highlight>Booking.</Highlight> Use our powerful infrastructure to
              book the trips and gain your commission - the best one in the
              industry.
            </AccentedZoomedText>
          </Feature>
          <Feature>
            <AccentedZoomedText big isDisabled={!isMmbScreenActive}>
              <Highlight>Manage my booking</Highlight> allows your customers to
              modify the trip, edit passenger’s details or purchase additional
              services.
            </AccentedZoomedText>
          </Feature>
          <Feature>
            <AccentedZoomedText big isDisabled={!isPaymentsScreenActive}>
              <Highlight>Payments</Highlight> allow your users to pay instantly
              for their bookings, right within your app.
            </AccentedZoomedText>
          </Feature>
        </FeaturesContainer>

        {featuresRef !== null && (
          <FloatedPhone
            isFixed={isFixed}
            scrolledOnFeature={scrolledOnFeature}
          />
        )}
      </Content>
    );
  }
}

const AccentedZoomedText = styled(AccentedText)`
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    transition: all 0.3s ease;
    ${({ isDisabled }) => (isDisabled ? null : 'transform: scale(1.05, 1.05);')}
  }
`;

const MultiplatformWrapper = styled.div`
  padding-top: 100px;
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
    margin-top: 80px;
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

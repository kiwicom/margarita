// @flow

import React from 'react';
import styled from 'styled-components';

import airport from '../../images/airport.jpg';
import { BREAKPOINTS } from '../../mediaQueriesConfig';
import GetStartedInfo from './GetStartedInfo';
import TextHeadline from './TextHeadline';
import Subtitle, { MobileGradientAccent } from './Subtitle';
import { withWindowSize } from '../withWindowSize';

type Props = {|
  +width: number,
|};

const headlineText = 'Ever dreamt of building the next Kiwi.com?';

class Headline extends React.Component<Props> {
  render() {
    const isTablet = this.props.width <= BREAKPOINTS.TABLET;
    return (
      <Container>
        <HeadlineTextWrapper>
          <TextHeadline align={isTablet} type="display">
            {headlineText}
          </TextHeadline>
        </HeadlineTextWrapper>
        <HeadlineBodyWrapper>
          <Subtitle align={isTablet} />
          <MobileGradientAccent>
            <PlaneImageMobile />
          </MobileGradientAccent>
          <ContainerBottom>
            <GetStartedInfo />
            <PlaneImage displayMobile="none" />
          </ContainerBottom>
        </HeadlineBodyWrapper>
      </Container>
    );
  }
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

const HeadlineTextWrapper = styled.div`
  padding: 30px 0;
  align-self: center;
  width: 85vw;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    align-self: flex-start;
    padding: 11vh 0 8vh 10vw;
  }
`;

const HeadlineBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: block;
    padding-top: 6vh;
  }
`;

const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 9.5vh 0 0 2vw;
    align-items: flex-start;
  }
`;

const PlaneImageMobile = styled.div`
  width: 94vw;
  height: 280px;
  background-image: url(${airport});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 90%;
`;

const PlaneImage = styled(PlaneImageMobile)`
  width: 57vw;
  height: 50vh;
  background-size: cover;
  margin-right: 3vw;
  display: none;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: block;
    height: 40vh;
  }
  @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
    display: block;
    height: 50vh;
  }
`;

export default withWindowSize<Props>(Headline);

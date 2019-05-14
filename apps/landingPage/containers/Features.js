// @flow

import React from 'react';
import styled from 'styled-components';

import Content from '../components/Content';
import Highlight from '../components/Highlight';
import AccentedText from '../components/AccentedText';

export default function Info() {
  return (
    <>
      <a name="features" />
      <Content>
        <Feature>
          <AccentedText>
            <Highlight>Search for flights.</Highlight> Get an access to the
            database of 15 billion connections virtually interlined by Kiwi.com
          </AccentedText>
        </Feature>
        <Feature>
          <AccentedText>
            <Highlight>Booking.</Highlight> Use our powerful infrastructure to
            book the trips and gain your commission - the best one in the
            industry.
          </AccentedText>
        </Feature>
        <Feature>
          <AccentedText>
            <Highlight>Manage my booking</Highlight> allows your customers to
            modify the trip, edit passenger’s details or purchase additional
            services.
          </AccentedText>
        </Feature>
        <Feature>
          <AccentedText>
            <Highlight>Payments</Highlight> allow your users to pay instantly
            for their bookings, right within your app.
          </AccentedText>
        </Feature>
      </Content>
    </>
  );
}

const Feature = styled.div`
  display: flex;
  margin-top: 100px;
`;

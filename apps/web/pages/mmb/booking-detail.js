// @flow

import * as React from 'react';
import { BookingDetail } from '@kiwicom/margarita-core';
import { withRouter, type Router } from 'next/router';

import MMBWrapper from '../../components/Wrapper';

type Props = {|
  +router: Router,
|};

const BookingDetailScreen = (props: Props) => (
  <MMBWrapper>
    <BookingDetail bookingId={props.router.query.id} />
  </MMBWrapper>
);

export default withRouter<Props>(BookingDetailScreen);

// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';
import Text from '../text/Text';

type Props = {|
  +differentAirportWarning: string,
|};

export default function TimelineDifferentAirport({
  differentAirportWarning,
}: Props) {
  return (
    <TimelineInformation
      icon={<Icon name="city" />}
      information={<Text type="critical">{differentAirportWarning}</Text>}
    />
  );
}

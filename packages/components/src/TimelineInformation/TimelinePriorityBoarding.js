// @flow

import * as React from 'react';
import { Icon, Text } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';

type Props = {|
  +information: string,
|};

export default function TimelinePriorityBoarding({ information }: Props) {
  return (
    <TimelineInformation
      icon={<Icon name="priority-boarding" />}
      information={<Text type="primary">{information}</Text>}
    />
  );
}

// @flow

import * as React from 'react';

import TimelineInformation from './TimelineInformation';

import { Icon } from '../Icon';
import Text from '../Text';

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

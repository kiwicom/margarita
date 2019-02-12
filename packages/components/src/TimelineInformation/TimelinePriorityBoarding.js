// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';
import Text from '../text/Text';

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

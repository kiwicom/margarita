// @flow

import * as React from 'react';

import TimelineInformation from './TimelineInformation';

import { Icon } from '../Icon';
import { Text } from '../Text';

type Props = {|
  +formattedDate: string,
  +warning?: string,
|};

export default function TimelineDate({ formattedDate, warning }: Props) {
  return (
    <TimelineInformation
      icon={<Icon name="calendar" />}
      information={<Text type="attention">{formattedDate}</Text>}
      warning={<Text type="critical">{warning}</Text>}
    />
  );
}

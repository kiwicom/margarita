// @flow

import * as React from 'react';
import { Icon, Text } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';

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

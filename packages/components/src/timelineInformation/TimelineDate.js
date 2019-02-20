// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';
import Text from '../text/Text';

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

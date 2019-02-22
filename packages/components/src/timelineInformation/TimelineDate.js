// @flow

import * as React from 'react';
import { Icon, type StylePropType } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';
import Text from '../text/Text';

type Props = {|
  +formattedDate: string,
  +warning?: string,
  +containerStyle?: StylePropType,
|};

export default function TimelineDate({
  formattedDate,
  warning,
  containerStyle,
}: Props) {
  return (
    <TimelineInformation
      icon={<Icon name="calendar" />}
      information={<Text type="attention">{formattedDate}</Text>}
      warning={<Text type="critical">{warning}</Text>}
      containerStyle={containerStyle}
    />
  );
}

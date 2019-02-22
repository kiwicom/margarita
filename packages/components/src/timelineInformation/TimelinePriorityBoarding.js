// @flow

import * as React from 'react';
import { Icon, type StylePropType } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';
import Text from '../text/Text';

type Props = {|
  +information: string,
  +containerStyle?: StylePropType,
|};

export default function TimelinePriorityBoarding({
  information,
  containerStyle,
}: Props) {
  return (
    <TimelineInformation
      icon={<Icon name="priority-boarding" />}
      information={<Text type="primary">{information}</Text>}
      containerStyle={containerStyle}
    />
  );
}

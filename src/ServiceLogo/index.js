// @flow

import * as React from 'react';
import { Image } from 'react-native';

type Name =
  | 'AirHelp'
  | 'Amex'
  | 'AxaAssistance'
  | 'DinersClub'
  | 'JCB'
  | 'Maestro'
  | 'MasterCard'
  | 'MIR'
  | 'NewYorkTimes'
  | 'NortonSecured'
  | 'TravelPulse'
  | 'Visa'
  | 'VisaHQ'
  | 'Zooz';

type Props = {|
  +name: Name,
|};

const ServiceLogo = ({ name }: Props) => {
  let source;
  switch (name) {
    case 'Visa': {
      source = require('./assets/VisaLogo.imageset/visa.png'); //eslint-disable-line
      break;
    }
    default: {
      source = '';
    }
  }
  return (
    <Image
      source={source}
      style={{
        backgroundColor: 'transparent',
      }}
    />
  );
};

export default ServiceLogo;

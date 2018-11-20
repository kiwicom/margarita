// @flow

import * as React from 'react';

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
  +size?: string,
  grayScale?: boolean,
|};

const getHeight = size => {
  const tokens = {
    height: {
      small: '12px',
      medium: '24px',
      large: '48px',
    },
  };
  return tokens.height[size];
};
const baseURL = '//images.kiwi.com';

const getColor = greyScale => (greyScale ? 'logos-grayscale' : 'logos');

const style = {
  width: 'auto',
  backgroundColor: 'transparent',
};

const ServiceLogo = ({ name, size = 'medium', grayScale = false }: Props) => (
  <img
    style={[style, { height: () => getHeight(size) }]}
    src={`${baseURL}/${getColor(grayScale)}/0x${parseInt(
      getHeight(size),
      10
    )}/${name}.png`}
    srcSet={`${baseURL}/${getColor(grayScale)}/0x${parseInt(
      getHeight(size),
      10
    ) * 2}/${name}.png 2x`}
    alt={name}
  />
);

export default ServiceLogo;

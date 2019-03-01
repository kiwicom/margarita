// @flow

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

type Size = 'small' | 'medium' | 'large';

export type Props = {|
  +name: Name,
  +size?: Size, // this prop is supported only on web
  grayScale?: boolean,
|};

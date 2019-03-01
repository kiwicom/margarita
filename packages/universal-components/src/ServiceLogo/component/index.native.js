// @flow

import * as React from 'react';
import { Image } from 'react-native';

import type { Props } from './ServiceLogoTypes';

export default function ServiceLogo({ name, grayScale }: Props) {
  let source;
  switch (name) {
    case 'AirHelp': {
      source = grayScale
        ? require('../assets/GrayAirHelpLogo.imageset/AirHelp.png')
        : require('../assets/AirHelpLogo.imageset/AirHelp.png');
      break;
    }
    case 'Amex': {
      source = grayScale
        ? require('../assets/GrayAmexLogo.imageset/Amex.png')
        : require('../assets/AmexLogo.imageset/Amex.png');
      break;
    }
    case 'AxaAssistance': {
      source = grayScale
        ? require('../assets/GrayAxaAssistanceLogo.imageset/AxaAssistance.png')
        : require('../assets/AxaAssistanceLogo.imageset/AxaAssistance.png');
      break;
    }
    case 'DinersClub': {
      source = grayScale
        ? require('../assets/GrayDinersClubLogo.imageset/DinersClub.png')
        : require('../assets/DinersClubLogo.imageset/DinersClub.png');
      break;
    }
    case 'JCB': {
      source = grayScale
        ? require('../assets/GrayJCBLogo.imageset/JCB.png')
        : require('../assets/JCBLogo.imageset/JCB.png');
      break;
    }
    case 'Maestro': {
      source = grayScale
        ? require('../assets/GrayMaestroLogo.imageset/Maestro.png')
        : require('../assets/MaestroLogo.imageset/Maestro.png');
      break;
    }
    case 'MasterCard': {
      source = grayScale
        ? require('../assets/GrayMasterCardLogo.imageset/MasterCard.png')
        : require('../assets/MasterCardLogo.imageset/MasterCard.png');
      break;
    }
    case 'MIR': {
      source = grayScale
        ? require('../assets/GrayMIRLogo.imageset/MIR.png')
        : require('../assets/MIRLogo.imageset/MIR.png');
      break;
    }
    case 'NewYorkTimes': {
      source = grayScale
        ? require('../assets/GrayNewYorkTimesLogo.imageset/NewYorkTimes.png')
        : require('../assets/NewYorkTimesLogo.imageset/NewYorkTimes.png');
      break;
    }
    case 'NortonSecured': {
      source = grayScale
        ? require('../assets/GrayNortonSecuredLogo.imageset/NortonSecured.png')
        : require('../assets/NortonSecuredLogo.imageset/NortonSecured.png');
      break;
    }
    case 'TravelPulse': {
      source = grayScale
        ? require('../assets/GrayTravelPulseLogo.imageset/TravelPulse.png')
        : require('../assets/TravelPulseLogo.imageset/TravelPulse.png');
      break;
    }
    case 'Visa': {
      source = grayScale
        ? require('../assets/GrayVisaLogo.imageset/Visa.png')
        : require('../assets/VisaLogo.imageset/Visa.png');
      break;
    }
    case 'VisaHQ': {
      source = grayScale
        ? require('../assets/GrayVisaHQLogo.imageset/VisaHQ.png')
        : require('../assets/VisaHQLogo.imageset/VisaHQ.png');
      break;
    }
    case 'Zooz': {
      source = grayScale
        ? require('../assets/GrayZoozLogo.imageset/Zooz.png')
        : require('../assets/ZoozLogo.imageset/Zooz.png');
      break;
    }
    default: {
      source = '';
    }
  }
  return (
    <Image
      source={source}
      resizeMode="contain"
      style={{
        backgroundColor: 'transparent',
      }}
    />
  );
}

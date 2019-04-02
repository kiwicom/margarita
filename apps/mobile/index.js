// @flow

import React from 'react';
import * as Expo from 'expo';
import { Buffer } from 'buffer'; // eslint-disable-line node/prefer-global/buffer
import { Fonts } from '@kiwicom/universal-components';

import SharedApp from './App';

if (__DEV__) {
  Expo.KeepAwake.activate();
}

type Props = {||};
type State = {|
  fontsLoaded: boolean,
|};

global.Buffer = Buffer; // No global Buffer in react-native, and graphql-relay needs it

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    Expo.SplashScreen.preventAutoHide();

    this.state = {
      fontsLoaded: false,
    };
  }

  async componentDidMount() {
    await this.loadFonts();
    this.afterFontLoaded();
  }

  loadFonts = () =>
    Expo.Font.loadAsync({
      Roboto: Fonts.Roboto,
      RobotoItalic: Fonts.RobotoItalic,
      RobotoBold: Fonts.RobotoBold,
      RobotoBoldItalic: Fonts.RobotoBoldItalic,
      'orbit-icons': Fonts.OrbitIcons,
    });

  afterFontLoaded = () => {
    this.setState({ fontsLoaded: true }, () => {
      Expo.SplashScreen.hide();
    });
  };

  render() {
    if (this.state.fontsLoaded) {
      return <SharedApp />;
    }
    return null;
  }
}

export default App;

Expo.registerRootComponent(App);

// @flow

import React from 'react';
import * as Expo from 'expo';
import { Fonts } from '@kiwicom/universal-components';
// import Roboto from '@kiwicom/universal-components/fonts/Roboto/Roboto-Regular.ttf';
// import RobotoItalic from '@kiwicom/universal-components/fonts/Roboto/Roboto-Italic.ttf';
// import RobotoBold from '@kiwicom/universal-components/fonts/Roboto/Roboto-Bold.ttf';
// import RobotoBoldItalic from '@kiwicom/universal-components/fonts/Roboto/Roboto-BoldItalic.ttf';
// import OrbitIcons from '@kiwicom/universal-components/fonts/orbit-icons.ttf';

import StorybookUI from './config';

type Props = {||};
type State = {|
  fontsLoaded: boolean,
|};

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
      return <StorybookUI />;
    }
    return null;
  }
}

export default App;

Expo.registerRootComponent(App);

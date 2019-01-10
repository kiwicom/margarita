// @flow

import React from 'react';
import * as Expo from 'expo';
import { Buffer } from 'buffer';
import Roboto from '@kiwicom/universal-components/lib/fonts/Roboto/Roboto-Regular.ttf';
import OrbitIcons from '@kiwicom/universal-components/lib/fonts/orbit-icons.ttf';

import SharedApp from './App';

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

  loadFonts = () =>
    Expo.Font.loadAsync({
      Roboto: Roboto,
      'orbit-icons': OrbitIcons,
    });

  async componentDidMount() {
    await this.loadFonts();
    this.setState({ fontsLoaded: true }, () => {
      Expo.SplashScreen.hide();
    });
  }

  render() {
    if (this.state.fontsLoaded) {
      return <SharedApp />;
    }
    return null;
  }
}

export default App;

Expo.registerRootComponent(App);

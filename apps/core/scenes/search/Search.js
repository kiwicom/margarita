// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { Illustration } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-device';

import SearchForm from '../../components/searchForm/SearchForm';

type Props = {
  +layout: number,
};

class Search extends React.Component<Props> {
  render() {
    const desktopLayout = this.props.layout >= LAYOUT.desktop;

    return (
      <View style={styles.container}>
        <View style={[styles.form, desktopLayout && styles.formDesktop]}>
          <View style={styles.illustrationWrapper}>
            <Illustration name="Boarding" style={styles.boardingIllustration} />
          </View>
          <SearchForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    web: {
      overflowY: 'auto',
      justifyContent: 'flex-start',
    },
  },
  form: {
    flex: 1,
    width: '100%',
    maxWidth: 500,
    padding: parseInt(defaultTokens.spaceXSmall, 10),
    web: {
      maxWidth: 730,
      paddingHorizontal: parseInt(defaultTokens.spaceLarge, 10),
    },
  },
  formDesktop: {
    web: {
      maxWidth: 1100,
    },
  },
  illustrationWrapper: {
    flex: 5,
    justifyContent: 'flex-end',
    web: {
      flex: 0,
      flexBasis: 240,
    },
  },
  boardingIllustration: {
    marginBottom: 20,
    height: '70%',
    web: {
      height: 200,
    },
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default withLayoutContext(layoutSelect)(Search);

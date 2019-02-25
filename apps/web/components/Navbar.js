// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import Router from 'next/router';
import { TouchableWithoutFeedback } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import NavbarLink from './NavbarLink';

const goToHomePage = () => {
  Router.push('/');
};

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.actionsLeft}>
        <TouchableWithoutFeedback onPress={goToHomePage}>
          <Image
            style={styles.image}
            source={{ uri: 'https://go.kiwi.com/logo.jpg' }}
            accessibilityLabel="Logo"
          />
        </TouchableWithoutFeedback>
        <NavbarLink label="Travel" route="/" />
      </View>
      <View style={styles.actionsRight}>
        <NavbarLink label="Manage My Booking" route="/mmb" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    zIndex: parseInt(defaultTokens.zIndexSticky, 10),
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 80,
    marginEnd: 20,
  },
  actionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsRight: {
    flexDirection: 'row',
  },
});

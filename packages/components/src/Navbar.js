// @flow

import * as React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import Router from 'next/router';

/**
 * This component should only be used by web.
 * react-navigation handles header for mobile
 */
const goToHomePage = () => {
  Router.push('/');
};
export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <TouchableWithoutFeedback onPress={goToHomePage}>
        <Image
          style={styles.image}
          source={{ uri: 'https://go.kiwi.com/logo.jpg' }}
          accessibilityLabel="Logo"
        />
      </TouchableWithoutFeedback>
      {/* TODO: Add more navigation links */}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 80,
    marginEnd: 20,
  },
});

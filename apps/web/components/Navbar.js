// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import {
  StyleSheet,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import Router from 'next/router';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withUserContext,
  type UserContextState,
} from '@kiwicom/margarita-core';

import NavbarLink from './NavbarLink';

const goToHomePage = () => {
  Router.push('/');
};

function Navbar({ userDisplayName, profileImage }) {
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
        {profileImage && (
          <Image
            style={styles.profileImage}
            source={{ uri: profileImage }}
            accessibilityLabel="ProfileImage"
          />
        )}
        <NavbarLink
          label={`Profile ${
            userDisplayName ? `(Logged in as ${userDisplayName})` : ''
          }`}
          route="/profile"
        />
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
    backgroundColor: defaultTokens.paletteWhite,
  },
  image: {
    height: 50,
    width: 80,
    marginEnd: 20,
  },
  profileImage: {
    height: parseInt(defaultTokens.heightIconLarge, 10),
    width: parseInt(defaultTokens.widthIconLarge, 10),
    borderRadius: parseInt(defaultTokens.borderRadiusCircle, 10),
    marginStart: 20,
  },
  actionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const selectUserContextState = ({
  userDisplayName,
  profileImage,
}: UserContextState) => ({
  userDisplayName,
  profileImage,
});

export default withUserContext(selectUserContextState)(Navbar);

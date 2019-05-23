// @flow

import * as React from 'react';
import { StyleSheet, Card } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Illustration, ContentContainer } from '@kiwicom/margarita-components';

import {
  withUserContext,
  type UserContextState,
} from '../../contexts/userContext/UserContext';
import SignOut from './SignOut';
import SignIn from './SignIn';

type Props = {|
  +isFirebaseAvailable: boolean,
  +isUserSignedIn: boolean,
  +signIn: () => void,
  +signOut: () => void,
|};

const Profile = (props: Props) => {
  return (
    <ContentContainer>
      <Illustration name="Lounge" style={styles.illustration} />
      <Card>
        {props.isUserSignedIn ? (
          <SignOut onPress={props.signOut} />
        ) : (
          <SignIn
            disabled={!props.isFirebaseAvailable}
            onPress={props.signIn}
          />
        )}
      </Card>
    </ContentContainer>
  );
};

const styles = StyleSheet.create({
  illustration: {
    paddingTop: parseInt(defaultTokens.spaceMedium, 10),
    paddingBottom: parseInt(defaultTokens.spaceLarge, 10),
  },
});

const selectUserContextState = ({
  isFirebaseAvailable,
  isUserSignedIn,
  actions: { signIn, signOut },
}: UserContextState) => ({
  isFirebaseAvailable,
  isUserSignedIn,
  signIn,
  signOut,
});

export default withUserContext(selectUserContextState)(Profile);

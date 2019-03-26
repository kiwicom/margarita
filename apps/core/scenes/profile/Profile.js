// @flow

import * as React from 'react';
import { StyleSheet, Card } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Illustration, ContentContainer } from '@kiwicom/margarita-components';

import {
  withUserContext,
  type UserContextState,
} from '../../components/userContext/UserContext';
import SignOut from './SignOut';
import SignIn from './SignIn';

type Props = {|
  +isUserSignedIn: boolean,
|};

class Profile extends React.Component<Props> {
  handleSignIn = () => {
    // @TODO
  };

  handleSignOut = () => {
    // @TODO
  };

  render() {
    return (
      <ContentContainer>
        <Illustration name="Lounge" style={styles.illustration} />
        <Card style={styles.card}>
          {this.props.isUserSignedIn ? (
            <SignOut onPress={this.handleSignOut} />
          ) : (
            <SignIn onPress={this.handleSignIn} />
          )}
        </Card>
      </ContentContainer>
    );
  }
}

const styles = StyleSheet.create({
  illustration: {
    paddingTop: parseInt(defaultTokens.spaceMedium, 10),
    paddingBottom: parseInt(defaultTokens.spaceLarge, 10),
  },
});

const selectUserContextState = ({ isUserSignedIn }: UserContextState) => ({
  isUserSignedIn,
});

export default withUserContext(selectUserContextState)(Profile);

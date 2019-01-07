// @flow

import * as React from 'react';
import { View, Dimensions, Platform } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { TouchableWithoutFeedback } from '../TouchableWithoutFeedback';

export type Props = {|
  +onClose: () => void,
  +children: ?React.Element<any>,
|};

const ModalContent = ({ onClose, children }: Props) => {
  const { width, height } = Dimensions.get('window');
  // Center modal content on web and tablets
  const centerContent = Platform.OS === 'web' || height / width < 1.6;
  return (
    <View style={[styles.container, centerContent && styles.containerCentered]}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.dismiss} />
      </TouchableWithoutFeedback>
      <View style={[styles.content, centerContent && styles.contentCentered]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerCentered: {
    justifyContent: 'center',
  },
  dismiss: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  content: {
    width: '100%',
    backgroundColor: defaultTokens.backgroundModal,
    borderTopLeftRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    borderTopRightRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    paddingTop: parseInt(defaultTokens.spaceXXSmall, 10),
    paddingBottom: parseInt(defaultTokens.spaceXXLarge, 10),
  },
  contentCentered: {
    maxWidth: 420,
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default ModalContent;

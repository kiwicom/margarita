// @flow

import * as React from 'react';
import { Animated, View } from 'react-native';
import {
  StyleSheet,
  Button,
  designTokens,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Expander from './Expander';

type Props = {|
  +onButtonPress?: () => void,
  +buttonLabel?: string,
  +renderButtons?: React.Node,
  +renderCollapseContent: React.Node,
  +renderVisibleContent: React.Node,
  +isLoading?: boolean,
|};
type State = {|
  +expanded: boolean,
  +opacity: Animated.Value,
  +overlayRendered: boolean,
|};

const overlayMaxOpacity = 1 - parseFloat(defaultTokens.opacityOverlay);
const overlayAnimationDuration = parseFloat(defaultTokens.durationFast) * 1000;

class PriceSummary extends React.Component<Props, State> {
  static opacityChangeListenerId: string;

  static defaultProps = {
    buttonLabel: 'Continue',
  };

  state = {
    expanded: false,
    opacity: new Animated.Value(0),
    overlayRendered: false,
  };

  componentDidMount() {
    PriceSummary.opacityChangeListenerId = this.state.opacity.addListener(
      this.handleAnimation,
    );
  }

  componentWillUnmount() {
    this.state.opacity.removeListener(PriceSummary.opacityChangeListenerId);
  }

  handleAnimation = (animation: { value: number }) => {
    if (animation.value === 0 && this.state.overlayRendered !== false) {
      this.setState({ overlayRendered: false });
    }
  };

  overlayAnimation = (expanded: boolean) => {
    return Animated.timing(this.state.opacity, {
      toValue: expanded ? overlayMaxOpacity : 0,
      duration: overlayAnimationDuration,
    });
  };

  handleExpand = () => {
    this.setState(
      state => ({
        overlayRendered: true,
        expanded: !state.expanded,
      }),
      () => {
        this.overlayAnimation(this.state.expanded).start();
      },
    );
  };

  render() {
    const {
      renderCollapseContent,
      renderVisibleContent,
      renderButtons,
      onButtonPress,
      buttonLabel,
      isLoading,
    } = this.props;
    return (
      <>
        {this.state.overlayRendered && (
          <TouchableWithoutFeedback onPress={this.handleExpand}>
            <Animated.View
              style={[
                styles.backgroundOverlay,
                { opacity: this.state.opacity },
              ]}
            />
          </TouchableWithoutFeedback>
        )}

        <View style={styles.container}>
          <Expander
            expanded={this.state.expanded}
            onPress={this.handleExpand}
          />
          <View style={styles.contentContainer}>
            <View style={styles.table}>
              {this.state.expanded && renderCollapseContent}
              <View style={styles.lastItem}>{renderVisibleContent}</View>
            </View>

            {renderButtons
              ? renderButtons
              : onButtonPress && (
                  <Button
                    block={true}
                    onPress={onButtonPress}
                    label={buttonLabel}
                    isLoading={isLoading}
                  />
                )}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    start: 0,
    end: 0,
    backgroundColor: designTokens.backdropColor,
  },
  container: {
    backgroundColor: defaultTokens.backgroundCard,
    borderColor: defaultTokens.borderColorTableCell,
    borderTopWidth: parseFloat(defaultTokens.borderWidthCard),
    borderStartWidth: parseFloat(defaultTokens.borderWidthCard),
    borderEndWidth: parseFloat(defaultTokens.borderWidthCard),
    borderTopStartRadius: parseFloat(defaultTokens.borderRadiusBadge),
    borderTopEndRadius: parseFloat(defaultTokens.borderRadiusBadge),
    padding: parseFloat(defaultTokens.spaceMedium),
    paddingTop: parseFloat(defaultTokens.spaceXXSmall),
    web: {
      alignItems: 'center',
    },
  },
  lastItem: {
    marginBottom: parseFloat(defaultTokens.spaceMedium),
  },
  table: {
    marginStart: parseFloat(defaultTokens.spaceXSmall),
  },
  contentContainer: {
    web: {
      width: '40%',
      minWidth: 300,
    },
  },
});

export default PriceSummary;

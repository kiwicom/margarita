// @flow

import * as React from 'react';
import { Animated, View } from 'react-native';
import { StyleSheet, Button } from '@kiwicom/universal-components';
import { TouchableWithoutFeedback } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Expander from './Expander';

type Props = {|
  +onButtonPress?: () => void,
  +buttonLabel?: string,
  +renderButtons?: React.Node,
  +renderCollapseContent: React.Node,
  +renderVisibleContent: React.Node,
|};
type State = {|
  +expanded: boolean,
  +opacity: any, // @TODO - set more exact type
  +overlayRendered: boolean,
|};

const overlayMaxOpacity = 1 - parseFloat(defaultTokens.opacityOverlay);
const overlayAnimationDuration = parseFloat(defaultTokens.durationFast) * 1000;

class PriceSummary extends React.Component<Props, State> {
  static opacityChangeListener: any; // @TODO - set more exact type

  static defaultProps = {
    buttonLabel: 'Continue',
  };

  state = {
    expanded: false,
    opacity: new Animated.Value(0),
    overlayRendered: false,
  };

  componentDidMount() {
    PriceSummary.opacityChangeListener = this.state.opacity.addListener(
      this.handleAnimation,
    );
  }

  componentWillUnmount() {
    this.state.opacity.removeListener(PriceSummary.opacityChangeListener);
  }

  // @TODO - set more exact type
  handleAnimation = (animation: any) => {
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
    backgroundColor: defaultTokens.colorTextAttention, // @TODO tokens: this color should be named like background
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

// @flow

import * as React from 'react';
import { View, ScrollView, StyleSheet as StyleSheetNative } from 'react-native'; // eslint-disable-line no-restricted-imports
import { Badge } from '../../Badge';
import { StyleSheet } from '../../PlatformStyleSheet';

type Props = {|
  +tags?: string[],
  +fontSize: number,
  +maxWidth: 'auto' | ?number,
  +minWidth: number,
|};

class TagsContainer extends React.PureComponent<Props> {
  static defaultProps = {
    maxWidth: 'auto',
  };

  render() {
    const { tags, fontSize, maxWidth, minWidth } = this.props;
    if (!tags || tags.length < 1) {
      return null;
    }

    const dynamicStyle = StyleSheet.create({
      container: {
        maxWidth,
        minWidth,
      },
    });

    return (
      <View>
        <ScrollView
          centerContent
          horizontal
          style={[styles.row, dynamicStyle.container]}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={nativeStyles.container}
        >
          <View style={styles.row}>
            {tags.map(tag => (
              <Badge
                fontSize={fontSize}
                type="info"
                key={tag}
                style={styles.tag}
              >
                {tag}
              </Badge>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const nativeStyles = StyleSheetNative.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  tag: {
    marginEnd: 4,
  },
});

export default TagsContainer;

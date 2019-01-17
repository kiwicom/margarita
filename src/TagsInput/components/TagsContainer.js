// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Badge } from '../../Badge';
import { StyleSheet } from '../../PlatformStyleSheet';

type Props = {|
  +tags: string[],
  +fontSize: number,
|};

export default class TagsContainer extends React.Component<Props> {
  static defaultProps = {
    tags: [],
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
  };

  shouldComponentUpdate(nextProps: Props) {
    const { tags, fontSize } = this.props;
    if (
      nextProps.tags.length === tags.length &&
      nextProps.tags[0] === tags[0] &&
      nextProps.fontSize === fontSize
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { tags, fontSize } = this.props;
    if (tags.length < 1) {
      return null;
    }

    return (
      <>
        {tags.map(tag => (
          <Badge
            fontSize={fontSize}
            type="info"
            key={tag}
            testID="input-tag"
            style={styles.tag}
          >
            {tag}
          </Badge>
        ))}
      </>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    marginHorizontal: 2,
    alignSelf: 'center',
  },
});

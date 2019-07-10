// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Tag from './Tag';
import { StyleSheet } from '../../PlatformStyleSheet';

type Props = {|
  +tags: string[],
  +fontSize: number,
  +onDeletePress?: number => void,
|};

export default class TagsContainer extends React.Component<Props> {
  static defaultProps = {
    tags: [],
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
    const { tags, fontSize, onDeletePress } = this.props;
    if (tags.length < 1) {
      return null;
    }

    return (
      <>
        {tags.map((tag, index) => (
          <Tag
            key={tag}
            fontSize={fontSize}
            index={index}
            testID={`input-tag-${tag}`}
            style={styles.tag}
            onDeletePress={onDeletePress}
          >
            {tag}
          </Tag>
        ))}
      </>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    alignSelf: 'center',
    marginVertical: parseFloat(defaultTokens.spaceXXXSmall),
    marginEnd: parseFloat(defaultTokens.spaceXXSmall),
  },
});

// @flow

import * as React from 'react';

type Props = {
  onReady?: boolean,
  children?: React.Node,
};

const connect = (PlaceholderComponent: React.ComponentType<Props>) => {
  function placeholder(props: Props) {
    const { onReady, children, ...otherProps } = props;

    if (onReady) {
      return children;
    }

    return <PlaceholderComponent {...otherProps} />;
  }

  return placeholder;
};

export default connect;

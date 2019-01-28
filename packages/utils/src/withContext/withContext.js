// @flow

import * as React from 'react';
import isEqual from 'react-fast-compare';

export default function withContext<T>(
  select: T => Object,
  Consumer: React.ComponentType<any> | React.StatelessFunctionalComponent<any>,
) {
  return (Component: React.ElementType) => {
    class WithShouldComponentUpdate extends React.Component<{|
      ...T,
      +children: React.Element<any>,
    |}> {
      /**
       * All components that subscribes to context would re render even when props they are not subsrcibing
       * too changes. This shouldComponentUpdate should make the subscriber only re render when its
       * props are changing
       */
      shouldComponentUpdate(nextProps: T) {
        return !isEqual(nextProps, this.props);
      }

      render() {
        const children = React.cloneElement(
          this.props.children,
          (this.props: Object),
        );
        return children;
      }
    }

    class WithContext extends React.Component<Object> {
      // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
      static navigationOptions = Component.navigationOptions;
      renderInner = (state: T) => {
        const stateProps = select(state);
        return (
          <WithShouldComponentUpdate {...this.props} {...stateProps}>
            <Component />
          </WithShouldComponentUpdate>
        );
      };

      render() {
        return <Consumer>{this.renderInner}</Consumer>;
      }
    }

    return WithContext;
  };
}

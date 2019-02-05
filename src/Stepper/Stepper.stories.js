// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, number, object, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Stepper } from '.';

class Wrapper extends React.Component<
  {| +children: React.Element<typeof Stepper> |},
  {| number: number |},
> {
  constructor(props) {
    super(props);
    this.state = {
      number: props.children.props.number || 0,
    };
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (prevProps.children.props.number !== children.props.number) {
      let numberState = children.props.number || 0;
      if (children.props.min && numberState <= children.props.min) {
        numberState = children.props.min;
      }
      if (children.props.max && numberState >= children.props.max) {
        numberState = children.props.max;
      }
      if (children.props.number) {
        this.setState({ number: numberState }); // eslint-disable-line react/no-did-update-set-state
      }
    }
  }

  incrementNumber = () => {
    this.setState(state => ({ number: state.number + 1 }));
  };

  decrementNumber = () => {
    this.setState(state => ({ number: state.number - 1 }));
  };

  render() {
    const { children: childrenProps } = this.props;
    const { number: numberState } = this.state;

    const children = React.cloneElement(childrenProps, {
      number: numberState,
      onIncrement: () => {
        this.incrementNumber();
        childrenProps.props.onIncrement();
      },
      onDecrement: () => {
        this.decrementNumber();
        childrenProps.props.onDecrement();
      },
    });
    return children;
  }
}

storiesOf('Stepper', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Stepper
      onDecrement={action('decrement')}
      onIncrement={action('increment')}
      number={0}
    />
  ))
  .add('With number not displayed', () => (
    <Stepper
      onDecrement={action('decrement')}
      onIncrement={action('increment')}
      number={0}
      showNumber={false}
    />
  ))
  .add('With number styled', () => (
    <Stepper
      onDecrement={action('decrement')}
      onIncrement={action('increment')}
      number={0}
      numberStyle={{ paddingHorizontal: 20, fontSize: 16 }}
    />
  ))
  .add('With min and max value', () => (
    <Stepper
      onDecrement={action('decrement')}
      onIncrement={action('increment')}
      number={0}
      showNumber
      numberStyle={{ paddingHorizontal: 20, fontSize: 16 }}
      min={-2}
      max={2}
    />
  ))
  .add('With disableDecrement', () => (
    <Stepper
      onDecrement={action('decrement')}
      onIncrement={action('increment')}
      number={0}
      showNumber
      numberStyle={{ paddingHorizontal: 20, fontSize: 16 }}
      disableDecrement
    />
  ))
  .add('With disableIncrement', () => (
    <Stepper
      onDecrement={action('decrement')}
      onIncrement={action('increment')}
      number={0}
      showNumber
      numberStyle={{ paddingHorizontal: 20, fontSize: 16 }}
      disableIncrement
    />
  ))
  .add('Playground', () => {
    const showNumber = boolean('Show number', true);
    const numberStyle = object('Number style', {
      paddingHorizontal: 20,
      fontSize: 16,
    });
    const disableIncrement = boolean('Disable increment', false);
    const disableDecrement = boolean('Disable decrement', false);
    const min = number('Min', 0);
    const max = number('Max', 2);
    const defaultNumber = number('Default number', 0);
    return (
      <Stepper
        onDecrement={action('decrement')}
        onIncrement={action('increment')}
        showNumber={showNumber}
        numberStyle={numberStyle}
        disableDecrement={disableDecrement}
        disableIncrement={disableIncrement}
        min={min}
        max={max}
        number={defaultNumber}
      />
    );
  });

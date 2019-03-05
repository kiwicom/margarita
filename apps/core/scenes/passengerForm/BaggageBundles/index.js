// @flow

import * as React from 'react';
import { Card } from '@kiwicom/universal-components';
import { HeaderWithIcon } from '@kiwicom/margarita-components';

import Header from './Header';
import BaggageBundle from './BaggageBundle';
import { bags } from './BagTypes';

const data = [
  {
    type: 'cabin',
    bundles: [
      {
        price: 'Free',
        bags: [
          {
            type: bags.PERSONAL_ITEM,
            quantity: 1,
            dimensions: '35 x 20 x 20 cm, 5kg',
            weight: '5 kg',
          },
        ],
      },
      {
        price: '$16.48',
        bags: [
          {
            type: bags.PERSONAL_ITEM,
            quantity: 0,
            dimensions: '35 x 20 x 20 cm',
            weight: '5 kg',
          },
          {
            type: bags.CABIN_BAG,
            quantity: 1,
            dimensions: '68 x 45 x 20 cm, 7kg',
            weight: '7 kg',
          },
        ],
      },
      {
        price: '$37.19',
        bags: [
          {
            type: bags.PERSONAL_ITEM,
            quantity: 1,
            dimensions: '35 x 20 x 20 cm, 5kg',
            weight: '5 kg',
          },
          {
            type: bags.CABIN_BAG,
            quantity: 1,
            dimensions: '68 x 45 x 20 cm, 7kg',
            weight: '7 kg',
          },
        ],
      },
    ],
  },
  {
    type: 'checked',
    bundles: [
      {
        price: null,
        bags: [
          {
            type: bags.CHECKED_BAG,
            quantity: 0,
            dimensions: '119 x 199 x 81 cm, 15kg',
            weight: '15 kg',
          },
        ],
      },
      {
        price: '$28.24',
        bags: [
          {
            type: bags.CHECKED_BAG,
            quantity: 1,
            dimensions: '119 x 199 x 81 cm, 15kg',
            weight: '15 kg',
          },
        ],
      },
      {
        price: '$37.19',
        bags: [
          {
            type: bags.CHECKED_BAG,
            quantity: 1,
            dimensions: '119 x 199 x 81 cm, 11kg',
            weight: '11 kg',
          },
          {
            type: bags.CHECKED_BAG,
            quantity: 1,
            dimensions: '119 x 199 x 81 cm, 18kg',
            weight: '18 kg',
          },
        ],
      },
    ],
  },
];

type State = {
  cabin: {
    chosen: number,
  },
  checked: {
    chosen: number,
  },
};

export default class BaggageBundles extends React.Component<{||}, State> {
  state = {
    cabin: {
      chosen: 0,
    },
    checked: {
      chosen: 0,
    },
  };

  handleToggleCheck = (type: string, index: number) => {
    this.setState(state => {
      return {
        ...state,
        [type]: {
          chosen: index,
        },
      };
    });
  };

  render() {
    return (
      <Card>
        <HeaderWithIcon label="Baggage bundles" iconName="baggage-set" />
        <Header text="Cabin baggage" />
        {data[0].bundles.map((bundle, index) => {
          return (
            <BaggageBundle
              key={index}
              bagIndex={index}
              price={bundle.price}
              bags={bundle.bags}
              onToggleCheck={this.handleToggleCheck}
              type={'cabin'}
              currentlyChosen={this.state.cabin.chosen}
            />
          );
        })}
        <Header text="Checked baggage" />
        {data[1].bundles.map((bundle, index) => {
          return (
            <BaggageBundle
              key={index}
              bagIndex={index}
              price={bundle.price}
              bags={bundle.bags}
              onToggleCheck={this.handleToggleCheck}
              type={'checked'}
              currentlyChosen={this.state.checked.chosen}
            />
          );
        })}
      </Card>
    );
  }
}

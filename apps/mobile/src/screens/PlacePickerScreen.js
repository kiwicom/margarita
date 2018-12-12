// @flow

import * as React from 'react';
import { PlacePicker } from '@kiwicom/margarita-core';

type Props = Object;

export default class PlacePickerScreen extends React.Component<Props> {
  render() {
    return (
      <>
        <PlacePicker />
      </>
    );
  }
}

// @flow

import * as React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import { Text } from '../../Text';
import Accordion from '../Accordion';

const Header = expanded =>
  expanded ? <Text>expanded</Text> : <Text>closed</Text>;
const children = 'Lorem ipsum';
describe('Accordion', () => {
  const { getByText, queryByText } = render(
    <Accordion expandedDefault header={Header}>
      <Text>{children}</Text>
    </Accordion>,
  );

  it('should have a children', () => {
    expect(getByText(children)).toBeDefined();
  });

  it('should be closed by default', () => {
    expect(getByText('expanded')).toBeDefined();
    expect(queryByText('closed')).toBeNull();
    expect(getByText(children)).toBeDefined();
  });

  it('should expand on press', () => {
    fireEvent(getByText('expanded'), 'press');

    expect(queryByText('expanded')).toBeNull();
    expect(getByText('closed')).toBeDefined();
    expect(queryByText(children)).toBeNull();
  });
});

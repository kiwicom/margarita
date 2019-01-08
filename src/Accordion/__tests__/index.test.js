// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import Accordion from '../Accordion';

const Header = expanded => (expanded ? 'expanded' : 'closed');
const children = 'Lorem ipsum';
describe('Accordion', () => {
  const { getByText } = render(
    <Accordion expandedDefault header={Header}>
      {children}
    </Accordion>
  );

  it('should have a children', () => {
    expect(getByText(children)).toBeDefined();
  });

  it('should be closed by default', () => {
    expect(getByText('expanded')).toBeDefined();
    expect(getByText('closed')).not.toBeDefined();
  });

  it('should expand on press', () => {
    fireEvent(getByText('expanded'), 'press');

    expect(getByText('expanded')).not.toBeDefined();
    expect(getByText('closed')).toBeDefined();
    expect(getByText(children)).toBeDefined();
  });
});

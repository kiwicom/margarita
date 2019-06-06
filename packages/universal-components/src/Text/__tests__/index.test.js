// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { Text } from '..';

describe('Text', () => {
  const children = 'Lorem ipsum';
  const { getByText } = render(<Text>{children}</Text>);
  it('should have defined children text', () => {
    expect(getByText(children)).toBeDefined();
  });

  it('should match snapshot diff', () => {
    const extend = render(
      <Text
        italic
        uppercase
        align="center"
        type="secondary"
        weight="bold"
        size="large"
      >
        {children}
      </Text>,
    );
    const base = render(<Text>{children}</Text>);

    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });

  it('should match snapshot diff - Accessible features', () => {
    const extend = render(
      <Text
        italic
        uppercase
        align="center"
        type="secondary"
        weight="bold"
        size="large"
        accessible={true}
        accessibilityLabel={children}
        accessibilityRole="header"
        ariaLevel="1"
      >
        {children}
      </Text>,
    );
    const base = render(<Text>{children}</Text>);

    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});

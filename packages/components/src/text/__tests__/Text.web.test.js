// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { render } from 'react-native-testing-library';
import { Text as UniversalComponentsText } from '@kiwicom/universal-components';

import Text from '../Text';

const originalPlatform = Platform.OS;

beforeAll(() => {
  Platform.OS = 'web';
});

afterAll(() => {
  Platform.OS = originalPlatform;
});

describe('Text -- web', () => {
  it("should render the same as Universal Components' Text", () => {
    const universalComponentsText = render(
      <UniversalComponentsText weight="bold" italic>
        Lorem
      </UniversalComponentsText>,
    );
    const text = render(
      <Text weight="bold" italic>
        Lorem
      </Text>,
    );
    expect(universalComponentsText.toJSON()).toEqual(text.toJSON());
  });
});

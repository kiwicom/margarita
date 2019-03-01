// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { FilterButton } from '..';

import { Icon } from '../../Icon';

describe('FilterButton', () => {
  const onPress = jest.fn();
  const title = 'Title';
  const icon = <Icon name="close" />;

  const { getByText } = render(
    <FilterButton isActive={false} title={title} onPress={onPress} />,
  );
  const button = getByText('Title');

  it('should contain a title', () => {
    expect(button).toBeDefined();
  });

  it('should execute onPress function', () => {
    fireEvent.press(button);
  });

  it('should contain an icon', () => {
    const { getByType } = render(
      <FilterButton
        isActive={false}
        title={title}
        onPress={onPress}
        icon={icon}
      />,
    );
    const filterIcon = getByType(Icon);
    expect(filterIcon).toBeDefined();
  });

  it('should match snapshot diff between active and inactive input', () => {
    const active = <FilterButton isActive title={title} onPress={onPress} />;
    const inactive = (
      <FilterButton isActive={false} title={title} onPress={onPress} />
    );

    expect(
      snapshotDiff(active, inactive, { contextLines: 1 }),
    ).toMatchSnapshot();
  });
});

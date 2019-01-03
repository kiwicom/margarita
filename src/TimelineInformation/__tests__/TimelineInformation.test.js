// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';
import { TimelineInformation } from '../index';

import { Icon } from '../../Icon';
import { Text } from '../../Text';

describe('TimelineInformation', () => {
  const informationText = 'Lorem ipsum';
  const iconName = 'calendar';
  const ignoredSize = 'large';
  const { getByText, getAllByType } = render(
    <TimelineInformation
      icon={<Icon name={iconName} size={ignoredSize} />}
      information={<Text size={ignoredSize}>{informationText}</Text>}
    />
  );
  it('should have defined children text', () => {
    const texts = getAllByType(Text);
    expect(texts).toHaveLength(1);
    expect(getByText(informationText)).toBeDefined();
    expect(texts[0].props.size).toBe('normal');
    expect(texts[0].props.numberOfLines).toBe(1);
  });

  it('should have defined children icon', () => {
    const icons = getAllByType(Icon);
    expect(icons).toHaveLength(1);
    expect(icons[0].props.name).toBe(iconName);
    expect(icons[0].props.size).toBe('small');
  });

  it('should match snapshot diff', () => {
    const extend = render(
      <TimelineInformation
        icon={<Icon name={iconName} color="orange" />}
        information={<Text type="success">{informationText}</Text>}
        containerStyle={{ borderColor: 'blue', backgroundColor: 'teal' }}
      />
    );
    const base = render(
      <TimelineInformation
        icon={<Icon name={iconName} />}
        information={<Text>{informationText}</Text>}
      />
    );

    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});

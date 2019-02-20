// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { Icon, AdaptableBadge } from '@kiwicom/universal-components';

import { SearchParamsSummary } from '..';

import Text from '../../text/Text';

const renderSearchParamsSummary = (tripType, component) => {
  const { getByType } = render(
    <SearchParamsSummary
      tripType={tripType}
      departure={{ city: 'Wroclaw', localizedDate: 'Oct 10' }}
      arrival={{ city: 'Prague', localizedDate: 'Dec 12' }}
    />,
  );

  return getByType(component);
};

describe('SearchParamsSummary', () => {
  it('should have icon name "flight-direct" when trip type is "OneWay"', () => {
    const icon = renderSearchParamsSummary('OneWay', Icon);

    expect(icon.props.name).toBe('flight-direct');
  });

  it('should have icon name "flight-multicity" when trip type is "MultiCity"', () => {
    const icon = renderSearchParamsSummary('MultiCity', Icon);

    expect(icon.props.name).toBe('flight-multicity');
  });

  it('should have icon name "flight-direct" when trip type is "Return"', () => {
    const icon = renderSearchParamsSummary('Return', Icon);

    expect(icon.props.name).toBe('flight-return');
  });

  it('should render badge with date', () => {
    const { getAllByType } = render(
      <SearchParamsSummary
        tripType="Return"
        departure={{ city: 'Wroclaw', localizedDate: 'Oct 10' }}
        arrival={{ city: 'Prague', localizedDate: 'Dec 12' }}
      />,
    );

    const dateBadge = getAllByType(AdaptableBadge)[0].props.text;

    expect(dateBadge).toBe('Oct 10');
  });

  it('should render proper departure and arrival cities', () => {
    const { getAllByType } = render(
      <SearchParamsSummary
        tripType="Return"
        departure={{ city: 'Wroclaw', localizedDate: 'Oct 10' }}
        arrival={{ city: 'Prague', localizedDate: 'Dec 12' }}
      />,
    );

    const departureCity = getAllByType(Text)[0].props.children;
    const arrivalCity = getAllByType(Text)[1].props.children;

    expect(departureCity).toBe('Wroclaw');
    expect(arrivalCity).toBe('Prague');
  });
});

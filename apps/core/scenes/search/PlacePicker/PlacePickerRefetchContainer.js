// @flow

// This rule is disabled because this is just temporary the PlacePicker component.
/* eslint-disable relay/unused-fields */

import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/margarita-relay';
import { debounce } from '@kiwicom/margarita-utils';
import * as React from 'react';

import { DEBOUNCE_TIME } from '../../../config';
import PlacePickerContent from './PlacePickerContent';
import type { PlacePickerRefetchContainer_locations as PlacePickerRefetchContainerType } from './__generated__/PlacePickerRefetchContainer_locations.graphql.js';

type Props = {
  locations: ?PlacePickerRefetchContainerType,
  relay: RelayRefetchProp,
};

class PlacePickerRefetchContainer extends React.Component<Props> {
  handleChangeText = debounce((text: string) => {
    this.props.relay.refetch({ input: { term: text } });
  }, DEBOUNCE_TIME);

  render() {
    const locations = this.props.locations?.locationsByTerm?.edges ?? [];
    return (
      <PlacePickerContent
        locations={locations}
        onChangeText={this.handleChangeText}
      />
    );
  }
}

export default createRefetchContainer(
  PlacePickerRefetchContainer,
  {
    locations: graphql`
      fragment PlacePickerRefetchContainer_locations on RootQuery
        @argumentDefinitions(
          input: { type: "LocationsByTermInput!", defaultValue: { term: "" } }
        ) {
        locationsByTerm(input: $input) {
          edges {
            node {
              id
              name
              locationId
            }
          }
        }
      }
    `,
  },
  graphql`
    query PlacePickerRefetchContainerQuery($input: LocationsByTermInput!) {
      ...PlacePickerRefetchContainer_locations @arguments(input: $input)
    }
  `,
);

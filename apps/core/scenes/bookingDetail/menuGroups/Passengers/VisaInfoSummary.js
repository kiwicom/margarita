// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { VisaInfo } from '@kiwicom/margarita-components';

import type { VisaInfoSummary_data as VisaInfoSummaryType } from './__generated__/VisaInfoSummary_data.graphql';

type Props = {|
  +data: ?VisaInfoSummaryType,
|};

type VisaRequiredType = {|
  +visaRequired: ?boolean,
|};

const isVisaRequired = (
  passengers: ?$ReadOnlyArray<?VisaRequiredType>,
): boolean => {
  if (passengers == null) return false;
  return passengers.some(passenger => passenger?.visaRequired);
};

const VisaInfoSummary = (props: Props) => {
  const visaRequired = isVisaRequired(props.data?.passengers);

  return <VisaInfo visaRequired={visaRequired} />;
};

export default createFragmentContainer(VisaInfoSummary, {
  data: graphql`
    fragment VisaInfoSummary_data on BookingInterface {
      passengers {
        visaRequired
      }
    }
  `,
});

// @flow

import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import SaveBookingPayload from '../types/inputs/SaveBookingPayload';
import SaveBookingOutput from '../types/outputs/SaveBooking';
import type { SaveBookingPayloadType } from '../Booking';

type Args = {|
  +payload: SaveBookingPayloadType,
|};

const SaveBooking = {
  name: 'SaveBooking',
  description:
    'Saves a given booking. Initiates the reservation process on the backend. (POST Request)',
  args: {
    payload: {
      type: SaveBookingPayload,
    },
  },
  type: SaveBookingOutput,
  resolve: async (
    _: mixed,
    args: Args,
    { dataLoader, locale }: GraphqlContextType,
  ) => {
    const savedBooking = await dataLoader.saveBooking.load({
      ...args.payload,
      language: locale.language,
      locale: locale.territory,
    });
    return savedBooking;
  },
};

export default SaveBooking;

// @flow

import * as React from 'react';
import { LayoutContextProvider } from '@kiwicom/margarita-device';
import { AlertContextProvider } from '@kiwicom/margarita-components';

import SearchContextProvider, {
  SearchContextConsumer,
} from './searchContext/SearchContext';
import BookingContextProvider from './bookingContext/BookingContext';
import type { ParseFieldsParams } from './searchContext/SearchContextTypes';
import UserContextProvider from './userContext/UserContext';

type Props = {
  children: React.Node,
  routerQuery?: ParseFieldsParams,
};

const ContextComposition = ({ children, routerQuery }: Props) => (
  <UserContextProvider>
    <SearchContextProvider routerQuery={routerQuery}>
      <LayoutContextProvider>
        <AlertContextProvider>
          <SearchContextConsumer>
            {({ adults, infants }) => (
              <BookingContextProvider passengersCount={adults + infants}>
                {children}
              </BookingContextProvider>
            )}
          </SearchContextConsumer>
        </AlertContextProvider>
      </LayoutContextProvider>
    </SearchContextProvider>
  </UserContextProvider>
);

export default ContextComposition;

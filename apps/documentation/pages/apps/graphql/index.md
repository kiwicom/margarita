# GraphQL server

_Check the [instructions](/getting-started) to have the project correctly set up first_.

From the root of `margarita`, run

```
yarn server
```

and open the GraphQL Playground by visiting http://localhost:4000.

## Folder structure

The code is organised by feature, as you can see in `apps/graphql/src/apps`.

```
apps/graphql/
├── index.js
├── src
│   ├── Schema.js                           # lists all the queries and mutations
│   ├── apps
│   │   ├── booking
│   │   │   ├── Booking.js                  # Flow types concerning booking feature
│   │   │   ├── __datasets__                # datasets to mock API responses
│   │   │   │   ├── AllBookings.json
│   │   │   │   ├── booking-16463447.json
│   │   │   │   ├── booking-6676524.json
│   │   │   │   └── booking-8142828.json
│   │   │   ├── dataloaders                 # contains the logic to fetch and sanitize data
│   │   │   │   ├── BookingDetail.js
│   │   │   │   └── Bookings.js
│   │   │   ├── queries                     # GraphQL queries concerning booking feature
│   │   │   │   ├── BookingDetail.js
│   │   │   │   ├── CustomerBookings.js
│   │   │   │   └── __tests__
│   │   │   └── types                       # GraphQL types concerning booking feature
│   │   │       ├── enums
│   │   │       ├── inputs
│   │   │       └── outputs
│   │   ├── common
│   │   │   └── types
│   │   ├── itinerary
│   │   │   ├── Itinerary.js
│   │   │   ├── __datasets__
│   │   │   ├── __mocks__
│   │   │   ├── dataloaders
│   │   │   ├── helpers
│   │   │   ├── queries
│   │   │   └── types
│   │   └── location
│   │       ├── Location.js
│   │       ├── __datasets__
│   │       ├── dataloaders
│   │       ├── queries
│   │       └── types
│   ├── server.js
│   └── services                            # lists of services/helpers useful across all features
│       ├── fetch
│       ├── graphqlContext
│       ├── logger
│       └── testingTools
```

Each feature has a similar folder structure:

```
├── feature
│    ├── Feature.js             # Flow types concerning feature
│    ├── __datasets__           # datasets to mock API responses
│    ├── dataloaders            # contains the logic to fetch and sanitize data
│    ├── queries                # GraphQL queries concerning feature
│    ├── mutations              # GraphQL mutations concerning feature
│    ├── resolvers              # more complex GraphQL resolvers
│    └── types                  # GraphQL types concerning feature
│        ├── enums
│        ├── inputs             # definitions of INPUT types exposed to the client, e.g. arguments in a query
│        └── outputs            # definitions of OUTPUT types exposed to the client, e.g. GraphQL type for GPS coordinates

```

The `dataloaders` folder is where the logic to connect to external APIs is stored. It has this name because it relies under the hood on https://github.com/facebook/dataloader which allows batching (i.e. trigger one API request even if your code needs to call the same API endpoint with different queries) and caching (i.e. using previously obtained data and not calling the API endpoint if the same call has already been made before).

Note: The cache offered by dataloaders is **per request**. On every request, a new context is created as you can see in `apps/graphql/src/server.js`. That context is defined in `apps/graphql/src/services/graphqlContext/GraphQLContext.js` and creates new dataloaders when invoked.

### Connecting to Tequila API

Looking at the dataloaders for `location`, you see there is a function called `fetchLocations` which uses the `fetch` service.

```
const fetchLocations = async (params: $ReadOnlyArray<LocationInput>) => {
  const data = await Promise.all(
    params.map(param => {
      if (param.term !== undefined) {
        return fetch(`/locations/query?${qs.stringify({ term: param.term })}`);
      }

      return fetch(`/locations/id?id=${param.code}`);
    }),
  );
  return data.map(({ locations }) => sanitizeLocations(locations));
};
```

The `fetch` service allows to reuse the same base url and authorization headers containing your Tequila API key, so that you can just focus on querying the endpoint you need.

After the data comes back, it is sanitized so that its shape corresponds to how the GraphQL schema prefers to resolve it.

Note the use of _OptimisticDataloader_ which locally caches the API responses in the GraphQL context so that querying the same endpoint with the same parameters somewhere else in your GraphQL schema will not trigger the same request twice.

// @flow

export type LocationArea = {|
  +id: ?string,
  +code: ?string,
  +locationId: ?string,
  +name: ?string,
  +slug: ?string,
  +flagURL: ?string,
|};

export type Location = {|
  +id: ?string,
  +locationId: ?string,
  +name: ?string,
  +timezone: ?string,
  +country: ?LocationArea,
  +slug: ?string,
  +city: ?LocationArea,
|};

type ApiLocationArea = {|
  id: ?string,
  name: ?string,
  code: ?string,
  slug: ?string,
|};

export type ApiLocation = {|
  +id: ?string,
  +locationId: ?string,
  +name: ?string,
  +slug: ?string,
  +timezone: ?string,
  +type: ?string,
  +city: ?{
    ...ApiLocationArea,
    +country: ?ApiLocationArea,
  },
|};

export type ApiResponse = {|
  +locations: $ReadOnlyArray<ApiLocation>,
|};

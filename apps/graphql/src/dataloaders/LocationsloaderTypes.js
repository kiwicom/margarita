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
|};

export type ApiResponse = {|
  +locations: $ReadOnlyArray<{|
    +id: ?string,
    +locationId: ?string,
    +name: ?string,
    +slug: ?string,
    +timezone: ?string,
    +city: ?{
      +country: ?{
        id: ?string,
        name: ?string,
        code: ?string,
        slug: ?string,
      },
    },
  |}>,
|};

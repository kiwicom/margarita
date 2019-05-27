// @flow

import { type ApiLocation } from '../Location';

function sanitizeCity(location: ApiLocation) {
  if (location.city != null) {
    return {
      id: location.city.id,
      locationId: location.city.id,
      code: location.city.code,
      flagURL: null,
      slug: location.city.slug,
      name: location.city.name,
    };
  }
  return null;
}

export default function sanitizeLocation(location: ApiLocation) {
  return {
    id: location.id,
    locationId: location.id,
    name: location.name,
    slug: location.slug,
    type: location.type,
    timezone: location.timezone,
    coordinates: {
      lat: location.location?.lat,
      lng: location.location?.lon,
    },
    country: {
      id: location.city?.country?.id ?? '',
      locationId: location.city?.country?.id,
      code: location.city?.country?.code,
      flagURL: null,
      slug: location.city?.country?.slug,
      name: location.city?.country?.name,
    },
    city: sanitizeCity(location),
  };
}

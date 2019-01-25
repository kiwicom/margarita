// @flow

const getCountry = () => ({
  id: 'aaa',
  name: 'Norway',
  code: 'NO',
  slug: 'slug',
  flagURL: 'flagUrl',
});

const vehicle = {
  type: 'bus',
  uniqueNo: '1234',
};

const transporter = {
  id: 'ads',
  name: 'Ryan Air',
};

const getLocation = (locationId, name) => ({
  id: 'aa',
  locationId: locationId,
  name: name,
  timezone: 'UTC+1',
  country: getCountry(),
});

const price = {
  currency: 'EUR',
  amount: 1234,
};

const getDate = (...date) => ({
  local: new Date(...date),
  utc: new Date(Date.UTC(...date)),
});

const getSegment = (origin, destination, departureTime, arrivalTime) => ({
  arrivalTime: getDate(2019, 3, 14, 10, 5),
  departureTime: getDate(2019, 3, 11, 10, 5),
  destination: destination,
  duration: 100,
  id: 'asdfg',
  origin: origin,
  transporter: transporter,
  vehicle: vehicle,
});

const getSector1 = () => {
  const segments = [
    getSegment(
      getLocation('OSL', 'Oslo'),
      getLocation('BCN', 'Barcelona'),
      getDate(2019, 3, 11, 10),
      getDate(2019, 3, 11, 13),
    ),
    getSegment(
      getLocation('BCN', 'Barcelona'),
      getLocation('PRG', 'Prague'),
      getDate(2019, 3, 11, 18),
      getDate(2019, 3, 11, 21),
    ),
  ];
  return {
    arrivalTime: getDate(2019, 3, 11, 21),
    departureTime: getDate(2019, 3, 11, 10),
    destination: getLocation('PRG', 'Prague'),
    duration: 660,
    id: 'asdf',
    origin: getLocation('OSL', 'Oslo'),
    segments: segments,
  };
};

const getSector2 = () => {
  const segments = [
    getSegment(
      getLocation('PRG', 'Prague'),
      getLocation('OSL', 'Oslo'),
      getDate(2019, 3, 13, 9),
      getDate(2019, 3, 13, 11),
    ),
  ];
  return {
    arrivalTime: getDate(2019, 3, 13, 11),
    departureTime: getDate(2019, 3, 13, 9),
    destination: getLocation('PRG', 'Prague'),
    duration: 180,
    id: 'asdfd',
    origin: getLocation('OSL', 'Oslo'),
    segments: segments,
  };
};

export default {
  id: 'asdf',
  type: 'return',
  price: price,
  origin: getLocation('OSL', 'Oslo'),
  destination: getLocation('PRG', 'Prague'),
  startTime: getDate(2019, 3, 11, 10),
  endTime: getDate(2019, 3, 13, 11),
  sectors: [getSector1(), getSector2()],
};

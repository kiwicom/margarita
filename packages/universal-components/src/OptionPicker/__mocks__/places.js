// @flow

export const Prague = {
  id: 'prague',
  type: 'destination',
  label: 'Prague',
  text: 'Czech Republic',
  subOptions: [
    {
      id: 'train-station',
      type: 'train',
      label: 'Prague Central Station',
      text: '5 km from city center',
    },
    {
      id: 'airport',
      type: 'airplane',
      label: 'Václav Havel Airport',
      text: '5 km from city center',
    },
  ],
};

export const Berlin = {
  id: 'berlin',
  type: 'destination',
  label: 'Berlin',
  text: 'Federal Republic of Germany',
  subOptions: [
    {
      id: 'QPP',
      type: 'airplane',
      label: 'Airport of Berlin',
      text: '4.5 km from city center',
    },
    {
      id: 'QWC',
      type: 'airplane',
      label: 'Zoo Railway Station',
      text: '10 km from city center',
    },
  ],
};

export const Presov = {
  id: 'presov',
  type: 'destination',
  label: 'Presov',
  text: 'Slovakia',
};

export default [Prague, Berlin, Presov];

/* global moment */
var trips = [
  {
    id: 1,
    name: 'Trip One',
    point: 2,
    tripDate: moment().startOf('day')
  },
  {
    id: 2,
    name: 'Trip Two',
    point: 1,
    tripDate: moment().startOf('month')
  },
  {
    id: 3,
    name: 'Trip Three',
    point: 1,
    tripDate: moment().startOf('month')
  },
  {
    id: 4,
    name: 'Trip Four',
    point: 4,
    tripDate: moment().startOf('year')
  },
  {
    id: 5,
    name: 'Trip Five',
    point: 0,
    tripDate: moment().startOf('year')
  }
];

export default {
  TRIPS: trips
};

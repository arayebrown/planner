/* global moment */
var trips = [
  {
    id: 1,
    name: 'Trip One',
    point: 2,
    distance: 34,
    tripDate: moment().startOf('day'),
    fuelEfficiency: 17,
    fuelCost: 3.15
  },
  {
    id: 2,
    name: 'Trip Two',
    point: 1,
    distance: 567,
    tripDate: moment().startOf('month'),
    fuelEfficiency: 17,
    fuelCost: 3.15
  },
  {
    id: 3,
    name: 'Trip Three',
    point: 1,
    distance: 2378,
    tripDate: moment().startOf('month'),
    fuelEfficiency: 17,
    fuelCost: 3.15
  },
  {
    id: 4,
    name: 'Trip Four',
    point: 4,
    distance: 1256,
    tripDate: moment().startOf('year'),
    fuelEfficiency: 17,
    fuelCost: 3.15
  },
  {
    id: 5,
    name: 'Trip Five',
    point: 0,
    distance: 86,
    tripDate: moment().startOf('year'),
    fuelEfficiency: 17,
    fuelCost: 3.15
  }
];

export default {
  TRIPS: trips
};

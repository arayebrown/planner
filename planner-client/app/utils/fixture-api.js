import moment from 'moment';

const trips = {
  data: [
    {
      id: 1,
      type: 'trip',
      attributes: {
        name: 'Trip One',
        point: 2,
        distance: 34,
        'trip-date': moment().startOf('day').toISOString(),
        'fuel-efficiency': 17,
        'fuel-cost': 3.15,
      },
    },
    {
      id: 2,
      type: 'trip',
      attributes: {
        name: 'Trip Two',
        point: 1,
        distance: 567,
        'trip-date': moment().startOf('month').toISOString(),
        'fuel-efficiency': 17,
        'fuel-cost': 3.15,
      },
    },
    {
      id: 3,
      type: 'trip',
      attributes: {
        name: 'Trip Three',
        point: 1,
        distance: 2378,
        'trip-date': moment().startOf('month').toISOString(),
        'fuel-efficiency': 17,
        'fuel-cost': 3.15,
      },
    },
    {
      id: 4,
      type: 'trip',
      attributes: {
        name: 'Trip Four',
        point: 4,
        distance: 1256,
        'trip-date': moment().startOf('year').toISOString(),
        'fuel-efficiency': 17,
        'fuel-cost': 3.15,
      },
    },
    {
      id: 5,
      type: 'trip',
      attributes: {
        name: 'Trip Five',
        point: 0,
        distance: 86,
        'trip-date': moment().startOf('year').toISOString(),
        'fuel-efficiency': 17,
        'fuel-cost': 3.15,
      },
    }
  ],
};

export default {
  TRIPS: trips
};

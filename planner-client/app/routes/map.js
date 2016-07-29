import BaseRoute from './base-route';

export default BaseRoute.extend({
  title: 'Map demo',
  
  setupController (controller, model) {
    this._super(controller, model);

    controller.setProperties({
      lat: 45.519743,
      lng: -122.680522,
      zoom: 13,
      emberConfLocation: [45.528298, -122.662986],
      hotel: [45.530891, -122.655504],
    });
  },
});

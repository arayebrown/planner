import BaseRoute from '../base-route';

export default BaseRoute.extend({
  title: 'Trippy the App',

  model () {
    return this.modelFor('trips');
  },

  setupController (controller, model) {
    this._super(controller, model);
    const trips = model || [];
    
    controller.setProperties({
      trips: trips,
    });
  },
});

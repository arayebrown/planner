import BaseRoute from './base-route';

export default BaseRoute.extend({
  title: 'Trippy, man!',

  model () {
    return this.store.findAll('trip');
  },

  actions: {
    createTrip: function() {
      this.transitionTo('trips.new');
    }
  }
});

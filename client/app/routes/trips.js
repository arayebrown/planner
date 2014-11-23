import BaseRoute from './base-route';

export default BaseRoute.extend({
  title: 'Trippy, man!',
  model: function() {
    return this.store.find('trip');
  },
  actions: {
    createTrip: function() {
      this.transitionTo('trips.new');
    }
  }
});

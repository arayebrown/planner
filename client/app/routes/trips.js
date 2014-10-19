import BaseRoute from './base-route';

export default BaseRoute.extend({
  title: 'Trippy, man!',
  model: function() {
    return this.get('store').find('trip');
  }
});

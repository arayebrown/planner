import BaseRoute from './base-route';

export default BaseRoute.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    this.set('title', model.get('name'));
  },
  model: function(params) {
    return this.store.find('trip', params.id);
  }
});

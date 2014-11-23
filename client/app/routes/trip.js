import BaseRoute from './base-route';

export default BaseRoute.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('title', model.name);
  },
  model: function() {
    return this.store.find('trip', params.id);
  }
});

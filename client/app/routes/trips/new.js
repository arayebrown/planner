import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('trip', {
      fuelEfficiency: 17,
      fuelCost: 3.15
    });
  },
  actions: {
    save: function() {
      this.get('controller.model').save();
      this.transitionTo('trips');
    },
    cancel: function() {
      this.get('controller.model').destroyRecord().then(function() {
        this.transitionTo('trips');
      }.bind(this));
    },
    willTransition: function() {
      this.get('controller.model').destroyRecord();
    }
  }
});

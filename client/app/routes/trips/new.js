import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('trip', {
      fuelEfficiency: 17,
      fuelCost: 3.15
    });
  },
  actions: {
    save: function(model) {
      model.save();
      this.transitionTo('trips');
    },
    willTransition: function() {
      this.get('currentModel').destroyRecord();
    }
  }
});

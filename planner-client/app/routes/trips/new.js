import BaseRoute from '../base-route';

export default BaseRoute.extend({
  title: 'Create a Trip',
  model () {
    return this.get('store').createRecord('trip', {
      fuelEfficiency: 17,
      fuelCost: 3.15
    });
  },
  actions: {
    saveTrip: function(model) {
        //setting a uuid while using mock pretender api
        model.save();
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

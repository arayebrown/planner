import BaseRoute from '../base-route';
import Utils from '../../utils/utils';

export default BaseRoute.extend({
  title: 'Create a Trip',
  model: function() {
    return this.get('store').createRecord('trip', {
      fuelEfficiency: 17,
      fuelCost: 3.15
    });
  },
  actions: {
    saveTrip: function(model) {
        //setting a uuid while using mock pretender api
        model.set('id', Utils.uuidGenerator()).save();
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

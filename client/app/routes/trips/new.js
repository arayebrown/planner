import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('trip');
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

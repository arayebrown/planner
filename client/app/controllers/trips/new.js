import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(model) {
      return this.send('saveTrip', model);
    }
  }
});

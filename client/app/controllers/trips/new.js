import Ember from 'ember';

export default Ember.ObjectController.extend({
  cost: function() {
    var distance = this.get('distance'),
        fuelCost = this.get('fuelCost'),
        fuelEfficiency = this.get('fuelEfficiency');

    return (distance/fuelEfficiency) * fuelCost;
  }.property('distance', 'fuelEfficiency', 'fuelCost')
});

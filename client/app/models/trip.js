/* global accounting */
import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr(),
  point: attr('number'),
  tripDate: attr('date'),
  distance: attr('number'),
  fuelCost: attr(),
  fuelEfficiency: attr(),
  cost: function() {
    var distance = this.get('distance'),
        fuelCost = this.get('fuelCost'),
        fuelEfficiency = this.get('fuelEfficiency');

    return accounting.formatMoney((distance/fuelEfficiency) * fuelCost);
  }.property('distance', 'fuelEfficiency', 'fuelCost')
});

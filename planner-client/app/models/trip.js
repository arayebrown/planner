import Ember from 'ember';
import DS from 'ember-data';
import formatMoney from 'accounting/format-money';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr(),
  point: attr(),
  tripDate: attr('date', {
    defaultValue() { return new Date(); }
  }),
  distance: attr(),
  fuelCost: attr(),
  fuelEfficiency: attr(),
  cost: Ember.computed('distance', 'fuelEfficiency', 'fuelCost', function() {
    var distance = this.get('distance'),
        fuelCost = this.get('fuelCost'),
        fuelEfficiency = this.get('fuelEfficiency');

    return formatMoney((distance/fuelEfficiency) * fuelCost);
  }),
});

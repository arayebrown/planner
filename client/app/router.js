import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('trips', function() {
    this.route('new');
  });
  this.resource('trip', { path: '/trip/:id' });
  this.resource('map');
});

export default Router;

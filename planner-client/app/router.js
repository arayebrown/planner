import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('trips', {resetNamespace: true}, function() {
    this.route('new');
  });
  this.route('trip', { path: '/trips/:id' });
  this.route('map');
});

export default Router;

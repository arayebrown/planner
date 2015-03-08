import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';

var route;

moduleFor('route:base-route', 'BaseRouteRoute', {
  beforeEach: function() {
    route = this.subject();
  },
  afterEach: function() {
    Ember.run(function() {
      route.set('title', null);
    });

    route.send('didTransition');
  }
});

test('it can set window.document.title when there is a title', function(assert) {
  Ember.run(function() {
    route.set('title', 'Awesome');
  });

  route.send('didTransition');

  assert.equal(window.document.title, route.get('title'), 'The title was set.');
});

test('it can bubble when there is no title', function(assert) {
  route.send('didTransistion');

  assert.equal(window.document.title, 'Client Tests', 'There is no title.');
});

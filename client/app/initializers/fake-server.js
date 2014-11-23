/* global Pretender */
import fixtures from '../utils/fixture-api';

export default {
  name: 'fake-server',
  initialize: function() {
    new Pretender(function() {
      this.get('/trips', function() {
        var all =  JSON.stringify(
          {trips: fixtures.TRIPS}
        );
        return [200, {'Content-Type': 'application/json'}, all];
      });

      this.get('/trips/:id', function(request) {
        return [200, {'Content-Type': 'application/json'}, JSON.stringify(
          fixtures.TRIPS[request.params.id]
        )];
      });
    });
  }
};

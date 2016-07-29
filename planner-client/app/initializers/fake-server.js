import Pretender from 'pretender';
import fixtures from '../utils/fixture-api';

export default {
  name: 'fake-server',
  initialize: function() {
    new Pretender(function() {
      this.get('/trips', function() {
        var all =  JSON.stringify(fixtures.TRIPS);
        return [200, {'Content-Type': 'application/json'}, all];
      });

      this.get('/trips/:id', function(request) {
        return [200, {'Content-Type': 'application/json'}, JSON.stringify(
          fixtures.TRIPS[request.params.id]
        )];
      });

      this.post('/trips', function(request) {
        return[200, {'Content-Type': 'application/json'}, JSON.stringify(request.params)];
      });
    });
  }
};

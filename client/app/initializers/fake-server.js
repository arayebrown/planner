/* global Pretender */
var TRIPS = [
  {
    id: 1,
    name: 'Bob'
  },
  {
    id: 2,
    name: 'Sue'
  }
];

export default {
  name: 'fake-server',
  initialize: function() {
    new Pretender(function() {
      this.get('/trips', function() {
        var all =  JSON.stringify(
          {trips: TRIPS}
        );
        return [200, {"Content-Type": "application/json"}, all];
      });
    });
  }
};

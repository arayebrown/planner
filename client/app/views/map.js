/* global L */
import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'map',
  didInsertElement: function() {
    var center = [47.9102109,-122.54569],
        controller = this.get('controller'),
        zoomLevel = controller.get('zoomLevel'),
        map = L.map('map').setView(center, zoomLevel);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('zoomend', function (e) {
      controller.set('zoomLevel', e.target.getZoom());
    });

    controller.set('map', map);
  }
});

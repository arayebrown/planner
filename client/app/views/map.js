/* global L */
import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['map-container'],
  home: [47.9102109,-122.54569],
  templateName: 'map',
  didInsertElement: function() {
    var center = this.get('home'),
        controller = this.get('controller'),
        zoomLevel = controller.get('zoomLevel'),
        map = L.map('map').setView(center, zoomLevel);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.Icon.Default.imagePath = '/leaflet/dist/images';

    L.marker(center, {
      riseOnHover: true
    }).addTo(map);

    map.on('zoomend', function (e) {
      controller.set('zoomLevel', e.target.getZoom());
    });

    controller.set('map', map);
  }
});

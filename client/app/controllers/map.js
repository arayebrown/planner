import Ember from 'ember';

export default Ember.Controller.extend({
  zoomLevel: 13,
  zoomLevelChanged: function() {
    var zoomLevel = this.get('zoomLevel'),
        map = this.get('map');

    if (zoomLevel !== map.getZoom()) {
      map.setZoom(zoomLevel);
    }
  }.observes('zoomLevel')
});

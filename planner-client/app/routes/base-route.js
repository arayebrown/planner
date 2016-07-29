import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    setupTitle: function() {
      var title = this.get('title');
      if (title) {
        window.document.title = title;
      } else {
        return true;
      }
    },
    didTransition: function() {
      this.send('setupTitle');
    }
  }
});

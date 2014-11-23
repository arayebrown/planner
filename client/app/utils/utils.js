/* global moment,_ */
import Ember from 'ember';

var Utils = Ember.Namespace.create({
  dateFormats: {
    date: 'YYYY-MM-DD'
  },
  formatDate: function(date, format) {
    if (_.isDate(date)) {
      return moment(date).format(format);
    } else {
      return date;
    }
  },
  readableDate: function(isoDate) {
    return Utils.formatDate(isoDate, Utils.dateFormats.date);
  }
});

export default Utils;

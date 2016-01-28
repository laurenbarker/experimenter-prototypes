import Ember from 'ember';

export default Ember.Controller.extend({
  isIndex: Ember.computed('this.currentPath', function() {
  	if (this.currentPath === "index") {
  		return true
  	} else {
  		return false
  	}
  }),
});

import Ember from 'ember';

export default Ember.Component.extend({
  numberOfQuestions: 1,
  
  rangeOfQuestions: Ember.computed('numberOfQuestions', function() {
    var numberOfQuestions = this.get('numberOfQuestions');
    return Array
      .apply(null, Array(numberOfQuestions))
      .map(function (_, i) {return i;});
  }),
  
  actions: {
    add: function(){   
       this.incrementProperty('numberOfQuestions');
    }
  }// actions
});

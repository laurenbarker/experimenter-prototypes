import Ember from 'ember';

export default Ember.Component.extend({
  numberOfQuestions: 1,
  numberOfDynamicQuestions: 1,
  
  rangeOfQuestions: Ember.computed('numberOfQuestions', function() {
    var numberOfQuestions = this.get('numberOfQuestions');
    return Array
      .apply(null, Array(numberOfQuestions))
      .map(function (_, i) {return i;});
  }),

  rangeOfDynamicQuestions: Ember.computed('numberOfDynamicQuestions', function() {
    var numberOfDynamicQuestions = this.get('numberOfDynamicQuestions');
    return Array
      .apply(null, Array(numberOfDynamicQuestions))
      .map(function (_, i) {return i;});
  }),
  
  actions: {
    addQuestion: function(){   
       this.incrementProperty('numberOfQuestions');
    }, 
    addDynamicQuestion: function(){   
       this.incrementProperty('numberOfDynamicQuestions');
    }
  }// actions
});

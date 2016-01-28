import Ember from 'ember';

export default Ember.Component.extend({
	questionType: 'free response',
	questionTypes: [ 'free response', 
		'fill in the blank', 
		'multiple choice',
	  	'select all that apply',
	  	'matching',
	],

	actions: {
	    selectQuestionType: function(questionType) {
	      this.set('questionType', questionType);
	    },
	}
});

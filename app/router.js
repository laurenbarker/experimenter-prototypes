import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('consent');
  this.route('question');
  this.route('dynamic');
});

export default Router;

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');

  this.route('components', function() {
    this.route('alerts');
  });

  this.route('foundations', function() {
    this.route('color');
  });
});

export default Router;

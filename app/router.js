import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foundations', function() {
    this.route('branding');
    this.route('color');
  });

  this.route('elements', function() {
    this.route('alerts');
    this.route('buttons');
  });
  this.route('home');
});

export default Router;

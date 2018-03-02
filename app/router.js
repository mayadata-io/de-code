import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL,
    gitbase: config.gitBase

});

Router.map(function () {
    this.route('foundations', function () {
        this.route('branding');
        this.route('color');
        this.route('icons');
        this.route('layouts');
        this.route('typography');

    });

    this.route('elements', function () {
      this.route('alerts');
      this.route('avatars');
      this.route('badge');
      this.route('breadcrumb');
      this.route('buttons');
      this.route('cards');
      this.route('dropdowns');
      this.route('forms');
      this.route('list');
      this.route('modal');
      this.route('navbar');
      this.route('navs');
      this.route('paginations');
      this.route('popover');
      this.route('progress');
      this.route('tables');
      this.route('tooltips');
      this.route('banner');
    });
    this.route('home');
});

export default Router;
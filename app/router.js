import EmberRouter from '@ember/routing/router';
import config from 'test-tail/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
  
}

Router.map(function () {
  this.route('about', { path: '/about' });
  this.route('favorites', { path: '/favs' });
  this.route('test-settings');
  this.route('test-gsfqc');
  this.route('test-fpvt');
});

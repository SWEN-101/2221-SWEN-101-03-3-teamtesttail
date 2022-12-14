import EmberRouter from '@ember/routing/router';
import config from 'test-tail/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('testmode', function () {
    // this route brings you to a developer draft
    this.route('ctrlpanel'); // ex. format: <uri>/testmode/ctrlpanel
    this.route('fpvt');
    this.route('gsfqc');
    this.route('settings');
  });
  this.route('start');
});

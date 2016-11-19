import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('orders', {path:'/orders'})
  //shortcut of above since template and path are the same name
  this.route('orders', function() {
    this.route('order', {path:'/:order_id'});
  });
  this.route('receipt');
 // this.route('receipt', {path:'/receipt/:order_id'});
});

export default Router;

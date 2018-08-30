import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AngularFacebookPlugins from '../../src/index';

angular.module('app', [
  uiRouter,
  AngularFacebookPlugins
]).config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('DEV_APP', {
      url: '/',
      template: require('./app.html')
    });
  }]);

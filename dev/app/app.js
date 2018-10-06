import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AngularSocialPlugins from '../../src';

angular.module('app', [
  uiRouter,
  AngularSocialPlugins
]).config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('DEV_APP', {
      url: '/',
      template: require('./app.html')
    });
  }]);

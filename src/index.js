import angular from 'angular';
import fbComments from './plugins/FBComments.directive';
import fbPage from './plugins/FBPage.directive';

export default angular.module('angularFacebookPlugins', [
  fbComments,
  fbPage
]).name;

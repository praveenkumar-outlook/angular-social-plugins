import angular from 'angular';
import fbComments from './plugins/FBComments.directive';
import fbGroup from './plugins/FBGroup.directive';
import fbPage from './plugins/FBPage.directive';

export default angular.module('angularFacebookPlugins', [
  fbComments,
  fbGroup,
  fbPage
]).name;

import angular from 'angular';
import fbComments from './plugins/FBComments.directive';
import fbGroup from './plugins/FBGroup.directive';
import fbPage from './plugins/FBPage.directive';
import fbQuote from './plugins/FBQuote.directive';

export default angular.module('angularFacebookPlugins', [
  fbComments,
  fbGroup,
  fbPage,
  fbQuote
]).name;

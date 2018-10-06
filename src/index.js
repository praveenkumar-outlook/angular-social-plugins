import angular from 'angular';
import fbComments from './facebook/FBComments.directive';
import fbGroup from './facebook/FBGroup.directive';
import fbPage from './facebook/FBPage.directive';
import fbQuote from './facebook/FBQuote.directive';

export default angular.module('angularFacebookPlugins', [
  fbComments,
  fbGroup,
  fbPage,
  fbQuote
]).name;

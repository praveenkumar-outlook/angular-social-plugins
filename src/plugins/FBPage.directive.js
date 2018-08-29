import angular from 'angular';

export default angular.module('fbPagePlugin', [])
  .directive('fbPage', () => {
    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      template: '<h1>Hello {{name}}</h1>'
    }
  }).name;

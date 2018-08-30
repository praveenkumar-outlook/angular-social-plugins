import angular from 'angular';
import _ from 'underscore';

export default angular.module('fbPagePlugin', [])
  .directive('fbPage', ['$window', ($window) => {
    return {
      restrict: 'E',
      scope: {
        adaptContainerWidth: '@',
        appId: '@',
        height: '@',
        hideCover: '@',
        hideCta: '@',
        href: '@',
        locale: '@',
        showFacepile: '@',
        smallHeader: '@',
        tabs: '@',
        version: '@',
        width: '@',
        xfbml: '@'
      },
      template: `<div>
        <div id="fb-root"></div>
        <div class="fb-page"
          data-href={{href}}
          data-width={{width}}
          data-height={{height}}
          data-adapt-container-width={{adaptContainerWidth}}
          data-tabs={{tabs.join()}}
          data-hide-cover={{hideCover}}
          data-show-facepile={{showFacepile}}
          data-hide-cta={{hideCta}}
          data-small-header={{smallHeader}}
          ></div>
      </div>`,
      link: (scope) => {
        // Replace undefined values with default props
        _.defaults(scope, {
          adaptContainerWidth: true,
          locale: 'en_US',
          height: 500,
          hideCover: false,
          hideCta: false,
          showFacepile: true,
          smallHeader: false,
          tabs: ['timeline'],
          version: 'v3.1',
          width: 340,
          xfbml: true,
        });

        $window.fbAsyncInit = () => {
          FB.init({
            appId: scope.appId,
            xfbml: scope.xfbml,
            version: scope.version,
          });
        };

        // Load the SDK asynchronously
        ((d, s, id) => {
          const element = d.getElementsByTagName(s)[0];
          const fjs = element;
          let js = element;
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = `//connect.facebook.net/${scope.locale}/sdk.js`;
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
      }
    };
  }]).name;

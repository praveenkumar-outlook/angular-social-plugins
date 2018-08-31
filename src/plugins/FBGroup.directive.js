import angular from 'angular';
import _ from 'underscore';

export default angular.module('fbGroupPlugin', [])
  .directive('fbGroup', ['$window', ($window) => {
    return {
      restrict: 'E',
      scope: {
        appId: '@',
        href: '@',
        locale: '@',
        showMetadata: '@',
        showSocialContext: '@',
        skin: '@',
        version: '@',
        width: '@',
        xfbml: '@'
      },
      template: `<div>
        <div id="fb-root"></div>
        <div class="fb-group"
          data-href={{href}}
          data-show-social-context={{showSocialContext}}
          data-show-metadata={{showMetadata}}
          data-width={{width}}
          data-skin={{skin}}
          ></div>
      </div>`,
      link: (scope) => {
        // Replace undefined values with default props
        _.defaults(scope, {
          locale: 'en_US',
          showMetadata: false,
          showSocialContext: true,
          skin: 'light',
          version: 'v3.1',
          width: 280,
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

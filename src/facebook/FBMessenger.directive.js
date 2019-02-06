import angular from 'angular';
import _ from 'underscore';

export default angular.module('fbMessengerPlugin', [])
  .directive('fbMessenger', ['$window', ($window) => {
    return {
      restrict: 'E',
      scope: {
        appId: '@',
        locale: '@',
        pageId: '@',
        version: '@',
        xfbml: '@'
      },
      template: `<div>
        <div id="fb-root"></div>
        <div class="fb-customerchat"
          page_id={{pageId}}>
        </div>
      </div>`,
      link: (scope) => {
        // Replace undefined values with default props
        _.defaults(scope, {
          locale: 'en_US',
          version: 'v3.1',
          xfbml: true
        });

        $window.fbAsyncInit = () => {
          FB.init({
            appId: scope.appId,
            xfbml: scope.xfbml,
            version: scope.version
          });
        };

        // Load the SDK asynchronously
        ((d, s, id) => {
          const fjs = d.getElementsByTagName(s)[0];
          let js;
          if (d.getElementById(id)) {return;}
          js = d.createElement(s);
          js.id = id;
          js.src = `//connect.facebook.net/${scope.locale}/sdk/xfbml.customerchat.js`;
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebookchat-jssdk');
      }
    };
  }]).name;

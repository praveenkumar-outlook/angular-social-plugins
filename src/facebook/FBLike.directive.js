import angular from 'angular';
import _ from 'underscore';

export default angular.module('fbLikePlugin', [])
  .directive('fbLike', ['$window', ($window) => {
    return {
      restrict: 'E',
      scope: {
        action: '@',
        appId: '@',
        href: '@',
        layout: '@',
        locale: '@',
        share: '@',
        showFaces: '@',
        size: '@',
        version: '@',
        xfbml: '@'
      },
      template: `<div>
        <div id="fb-root"></div>
        <div class="fb-like"
          data-action={{action}}
          data-href={{href}}
          data-layout={{layout}}
          data-share={{share}}
          data-show-faces={{showFaces}}
          data-size={{size}}
        ></div>
      </div>`,
      link: (scope) => {
        // Replace undefined values with default props
        _.defaults(scope, {
          action: 'like',
          layout: 'standard',
          locale: 'en_US',
          share: false,
          showFaces: true,
          size: 'small',
          version: 'v3.1',
          xfbml: true
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

import angular from 'angular';
import _ from 'underscore';

export default angular.module('fbQuotePlugin', [])
  .directive('fbQuote', ['$window', ($window) => {
    return {
      restrict: 'E',
      scope: {
        appId: '@',
        href: '@',
        layout: '@',
        locale: '@',
        version: '@',
        xfbml: '@'
      },
      template: `<div>
        <div id="fb-root"></div>
        <div class="fb-quote"
          data-href={{href}}
          data-layout={{layout}}
          ></div>
      </div>`,
      link: (scope) => {
        // Replace undefined values with default props
        _.defaults(scope, {
          layout: 'quote',
          locale: 'en_US',
          version: 'v3.1',
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

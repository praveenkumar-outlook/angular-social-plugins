import angular from 'angular';
import _ from 'underscore';

export default angular.module('fbCommentsPlugin', [])
  .directive('fbComments', ['$window', ($window) => {
    return {
      restrict: 'E',
      scope: {
        appId: '@',
        colorscheme: '@',
        href: '@',
        locale: '@',
        mobile: '@',
        numposts: '@',
        orderBy: '@',
        version: '@',
        width: '@',
        xfbml: '@'
      },
      template: `<div>
        <div id="fb-root"></div>
        <div class="fb-comments"
          data-href={{href}}
          data-colorscheme={{colorscheme}}
          data-mobile={{mobile}}
          data-numposts={{numposts}}
          data-order-by={{orderBy}}
          data-width={{width}}
          ></div>
      </div>`,
      link: (scope) => {
        // Replace undefined values with default props
        _.defaults(scope, {
          colorscheme: 'light',
          locale: 'en_US',
          mobile: false,
          numposts: 10,
          orderBy: 'social',
          version: 'v3.1',
          width: 550,
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

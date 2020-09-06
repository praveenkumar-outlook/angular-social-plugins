# Angular Social Plugins

<p>
  <a href="https://badge.fury.io/js/angular-social-plugins">
    <img src="https://badge.fury.io/js/angular-social-plugins.svg" alt="npm version" height="18">
  </a>
  <a href="https://www.npmjs.com/package/angular-social-plugins">
    <img src="https://david-dm.org/praveenkumar-outlook/angular-social-plugins/status.svg" alt="dependencies Status badge">
    </a>
  <a href="https://www.npmjs.com/package/angular-social-plugins">
    <img src="https://david-dm.org/praveenkumar-outlook/angular-social-plugins/dev-status.svg" alt="devDependency Status badge">
  </a>
  <a href="https://www.npmjs.com/package/angular-social-plugins">
    <img src="https://img.shields.io/npm/dw/angular-social-plugins" alt="Downloads">
  </a>
  <a href="https://paypal.me/praveenkumarkalidass?locale.x=en_GB">
    <img src="https://img.shields.io/badge/paypal-donate-red" alt="Downloads">
  </a>
</p>

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save angular-social-plugins
```

## Usage

### Initialise module

```js
import AngularSocialPlugins from 'angular-social-plugins';

angular.module('app', [
  AngularSocialPlugins
]);
```

### Use it in html
- [FB Comments](#fb-comments)
- [FB Group](#fb-group)
- [FB Like](#fb-like)
- [FB Page](#fb-page)
- [FB Quote](#fb-quote)
- [FB Save](#fb-save)
- [FB Share](#fb-share)
- [FB Messenger](#fb-messenger)

#### FB Comments
```html
<fb-comments
  app-id="xxxxxxxxxxxxxxx"
  href="https://www.facebook.com/dopeyones/"
  colorscheme="light"
  locale="en_US"
  mobile="false"
  numposts="10"
  orderBy="social"
  version="v3.1"
  width="550"
  xfbml="true"></fb-comments>
```

#### FB Group
```html
<fb-group
  app-id="xxxxxxxxxxxxxxx"
  href="https://www.facebook.com/groups/ayearofrunning/"
  locale="en_US"
  showSocialContext="true"
  showMetadata="false"
  version="v3.1"
  width="280"
  skin="light"
  xfbml="true"></fb-group>
```

#### FB Like
```html
<fb-like
  app-id="xxxxxxxxxxxxxxx"
  href="https://developers.facebook.com/docs/plugins/"
  action="like"
  layout="standard"
  share="true"
  showFaces="true"
  size="large"
  xfbml="true"></fb-like>
```

#### FB Page
```html
<fb-page
  app-id="xxxxxxxxxxxxxxx"
  href="https://www.facebook.com/dopeyones/"
  adaptContainerWidth="true"
  height="500"
  hideCta="false"
  hideCover="false"
  locale="en_US"
  showFacepile="true"
  smallHeader="false"
  tabs="['timeline']"
  version="v3.1"
  width="340"
  xfbml="true"></fb-page>
```

#### FB Quote
```html
<fb-quote
  app-id="xxxxxxxxxxxxxxx"
  locale="en_US"
  version="v3.1"
  xfbml="true"></fb-quote>
```

#### FB Save
```html
<fb-save
  app-id="xxxxxxxxxxxxxxx"
  uri="https://www.instagram.com/facebook/"
  locale="en_US"
  size="large"
  version="v3.1"
  xfbml="true"></fb-save>
```

#### FB Share
```html
<fb-share
  app-id="xxxxxxxxxxxxxxx"
  uri="https://developers.facebook.com/docs/plugins/"
  layout="button_count"
  locale="en_US"
  size="large"
  version="v3.1"
  xfbml="true"></fb-share>
```

#### FB Messenger
```html
<fb-messenger
  app-id="xxxxxxxxxxxxxxx"
  page-id="xxxxxxxxxxxxxxx"
  xfbml="true"></fb-messenger>
```

## License

[MIT License](http://opensource.org/licenses/MIT)

# Angular Social Plugins

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
- [FB Page](#fb-page)
- [FB Quote](#fb-quote)

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

## License

[MIT License](http://opensource.org/licenses/MIT)

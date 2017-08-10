# my-ngx-library - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/my-ngx-library.svg)](https://badge.fury.io/js/my-ngx-library)
[![Build Status](https://travis-ci.org/asdf/my-ngx-library.svg?branch=master)](https://travis-ci.org/asdf/my-ngx-library)
[![Coverage Status](https://coveralls.io/repos/github/asdf/my-ngx-library/badge.svg?branch=master)](https://coveralls.io/github/asdf/my-ngx-library?branch=master)
[![dependency Status](https://david-dm.org/asdf/my-ngx-library/status.svg)](https://david-dm.org/asdf/my-ngx-library)
[![devDependency Status](https://david-dm.org/asdf/my-ngx-library/dev-status.svg?branch=master)](https://david-dm.org/asdf/my-ngx-library#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/asdf/my-ngx-library.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://asdf.github.io/my-ngx-library

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `my-ngx-library` via:
```shell
npm install --save my-ngx-library
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `my-ngx-library`:
```js
map: {
  'my-ngx-library': 'node_modules/my-ngx-library/bundles/my-ngx-library.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'my-ngx-library';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'my-ngx-library';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'my-ngx-library';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Justin Grayston. Licensed under the MIT License (MIT)


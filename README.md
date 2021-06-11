# Angular + Bootstrap with ng-bootstrap sample project #

This project is a simple sample of how to use Bootstrap with Angular and ng-bootstrap for dynamic widgets.

## About Bootstrap ##

Bootstrap is the most popular CSS Framework for developing responsive and mobile-first
websites.

See [https://getbootstrap.com/](https://getbootstrap.com/)

## About Angular ##

Angular is a web front-end framework lead by the Angular team from Google.

See [https://angular.io/](https://angular.io/)

## About ng-bootstrap ##

[Ng-bootstrap](https://ng-bootstrap.github.io/#/home) is a library that provides Angular 
modules for using the javascript components that provide functionality that, originally, 
is provided by bootstrap with third party javascript libraries.

If you are designing a plain website or web application that hasn't its front-end based
on Angular and you are using bootstrap as your CSS framework, you will probably need to
depend on the bootstrap javascript internal libs (for versions >= 5 of bootstrap) or jQuery 
and Popper.js libraries (for versions < 5 of bootstrap) to be able to use the dynamic
javascript properties of bootstrap.

If you are using bootstrap with Angular just to be able to use it's css functionalities
then you will not need ng-bootstrap. However, if you do need some of the bootstrap
javascript dependant goodies as modal dialogs, tooltip, carrousel, then it is better to
use some native Angular library as ng-bootstrap because jQuery as a dom manipulation
library can interfere in the Angular internals, the same can happen with the bootstrap 
internal javascript library. By doing so, as a plus, you are presented
with some other components and facilities that can shorten your development time.

There is another library called [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/)
that can be used for the same purpose as ng-bootstrap. Booth of then provide the
functionality of all bootstrap widgets and more, like datepicker, rating and typeahead.
I have made [some tests with ngx-bootstrap if you're interested too take a look](https://github.com/fabio-blanco/test-ngx-bootstrap).

## How to ##

To use only the bootstrap css utilities within your app, just link with the bootstrap css as
you normally would and don't bother with javascript issues. A way to do this in Angular
is to use npm:

```shell
$ npm install bootstrap
```

And then configure in the styles section from `angular.json` file:

```javascript
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

By doing this, the compiled distribution version of your app will have a styles.css file
with all the css from the angular.json `styles` section.

The ng-bootstrap can be installed with Angular Cli or manually.

To install with Angular Cli, run this:

```shell
ng add @ng-bootstrap/ng-bootstrap
```

To install manually, first install @angular/localize:

```shell
ng add @angular/localize
```

Then install the last production release of ng-bootstrap:

```shell
npm install @ng-bootstrap/ng-bootstrap
```

**Note: If your bootstrap version is >= 5 than, at the moment I'm writing this, ng-bootstrap that
supports bootstrap 5 is still in beta release**

If instead of the last production of ng-bootstrap you want to install a beta release install the
ng-bootstrap by running this:

```shell
npm install @ng-bootstrap/ng-bootstrap@next
```

Then you can use all ng-bootstrap widgets by importing NgbModule to your main app:

```typescript
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule],
})
export class YourAppModule {
}
```

Or you can just import the modules you are going to use:

```typescript
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbPaginationModule, NgbAlertModule],
})
export class YourAppModule {
}
```

## Copyright and license ##

Code and documentation copyright 2021 Fabio M. Blanco. Code released under the
[MIT License](https://github.com/fabio-blanco/test-ng-bootstrap/blob/master/LICENSE)

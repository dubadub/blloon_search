Example of AngularJS application
====================

## Demo

Checkout demo http://blloon.aleffa.ru/#/

## Technology stack

General:
- AngularJS project on Yeoman;
- Jasmine + Protractor for testing;
- Capistrano for deploy.

Front-end libraries: 

- angular-animate;
- angular-bootstrap: used for book modal window. Angular way of doing things, from Angular team.
- angular-resource: fetching data from remote server, with promises.
- angular-truncate;
- angular-ui-router and ui-router-extras: very powerful solution for routing. I used it for creating Pinterest style navigation experience (freezing search page while displaying book page with updates in address bar, so you can access book directly). Spend some time finding bug that occur during minification of ui-router-extras (https://github.com/dubadub/ui-router-extras/commit/f87ddeedbeab9d74be588336d7f68f074382f051).
- jquery: actually I don’t want it here, but some modules depend on it.
- ng-debounce: simple module for debouncing input to make UX better.
- ng-lodash: ruby like approach to Arrays;
- ngInfiniteScroll.

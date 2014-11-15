Example of AngularJS application
====================

## Demo

Checkout demo http://blloon.aleffa.ru

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
- angular-ui-router and ui-router-extras: very powerful solution for routing. I used it for creating Pinterest style navigation experience (freezing search page while displaying book page with updates in address bar, so you can access book directly). 
- jquery: actually I don’t want it here, but some modules depend on it.
- ng-debounce: simple module for debouncing input to make UX better.
- ng-lodash: ruby like approach to Arrays;
- ngInfiniteScroll.

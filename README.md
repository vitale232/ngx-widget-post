# License

Some of the code in this repository is based on an Esri example, which is licensed under the Apache 2.0 license. Please visit the original source code and license here:
https://github.com/Esri/jsapi-resources/blob/master/license.txt

# What's in the Repo/Branch

This repo contains an example directive showing a technique that can be used to add native Angular components to the [Esri ArcGIS JS API's `MapView`](https://developers.arcgis.com/javascript/). This has the effect of allowing developers the convenience of their preferred framework, modern [Angular](https://angular.io/), while giving the end user a more consistent experience. The component will be added to a corner of the map, like a native Esri widget.

This technique can be used to either supplement or replace [custom JS API widgets](https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-widget/index.html).

To both experiment with the Beta Esri ES Modules and make this example more forward-thinking, we have selected to use the beta `@arcgis/core` package with version 4.18 of the JS API.

It's also making use of `rxjs@next`, which at the time of this writing, is the beta 7.0 release. This leads to native typing on our complex `NgxWidgetDirective` creation operator, `combineLatest`.

# NgxWidget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

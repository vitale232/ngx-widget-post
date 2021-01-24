# Adding Angular Components to the ArcGIS JavaScript API MapView UI using a Directive

The [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) is a flexible client-side GIS technology that can be used to add interactive maps to your application. The API takes an un-opinionated approach, providing the flexibility to be used in your favorite front-end framework or with vanilla JS.

In this post, I'm going to describe a custom [Angular Structural Directive](https://angular.io/guide/structural-directives) that can be used to add an Angular component to the map, using the [`MapView.ui`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#ui). This leads to a smooth rendering experience, and in my opinion, a nice developer experience, allowing you to leverage your existing application code while building useful map widgets.

We're going to assume you have a firm grasp of Angular and a familiarity with the Esri JS API concepts. While we're at it, we're going to use the beta [`@arcgis/core` ES Module build](https://www.npmjs.com/package/@arcgis/core) of the API since it's ✨shiny✨ and new, plus it will hopefully make this post more useful going forward.

Here's a [GitHub repo](https://github.com/vitale232/ngx-widget-post) that contains all of the code.

## The Map Component

For the map component, we're going to start with this [basic example provided by Esri](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-angular-cli/src/app/app.component.ts), and add a couple of widgets and niceties to make for a more feature-rich map. This isn't the focus of the post, so let's keep this quick.

In the template, we provide a `div` and mark it with [Angular Template Reference Variable](https://angular.io/guide/template-reference-variables) syntax. This allows us to run a view query in our component using the [`@ViewChild` decorator](https://angular.io/api/core/ViewChild), giving us access to the [`ElementRef`](https://angular.io/api/core/ElementRef).

From there, we'll author a method to initialize the map and add in the desired widgets. In the `OnInit` lifecycle hook, we'll call our `initializeMap` method, and run it outside of Angular using the [`NgZone` service](https://angular.io/api/core/NgZone), so as to avoid triggering unnecessary change detection calls. We'll emit the required objects to the parent component, so that they're available use.

Here's the full component... It's a fair bit of code, but it's doing a lot for us.

```ts
import {
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import config from '@arcgis/core/config.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import Expand from '@arcgis/core/widgets/Expand';
import Legend from '@arcgis/core/widgets/Legend';

/**
 * A simple Esri map using the beta ES Modules build.
 * This code is based on an Esri Github example. Learn more here:
 * https://github.com/vitale232/jsapi-resources/tree/master/esm-samples
 */
@Component({
  selector: 'app-esri-map',
  template: ` <div #mapViewNode></div> `,
  styles: [
    `
      .esri-view {
        padding: 0;
        margin: 0;
        height: 60vh;
        width: 100%;
      }
      #mapViewNode {
        padding: 0;
        margin: 0;
        height: 60vh;
        width: 100%;
      }
    `,
  ],
})
export class EsriMapComponent implements OnInit, OnDestroy {
  @Output() public viewReady = new EventEmitter<__esri.MapView>();
  @Output() public layerReady = new EventEmitter<__esri.FeatureLayer>();
  @Output() public layerViewReady = new EventEmitter<__esri.LayerView>();

  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  private view: __esri.MapView | null = null;

  constructor(private zone: NgZone) {}

  ngOnInit(): any {
    config.assetsPath = 'assets/';

    this.zone.runOutsideAngular(() => {
      this.initializeMap().then((view) =>
        this.zone.run(() => this.viewReady.emit(view))
      );
    });
  }

  initializeMap(): Promise<__esri.MapView> {
    const container = this.mapViewEl.nativeElement as HTMLDivElement;

    const layer = new FeatureLayer({
      // auto-casts to a new PortalItem
      portalItem: {
        id: '234d2e3f6f554e0e84757662469c26d3',
      },
    });

    const map = new Map({
      basemap: 'gray-vector',
      layers: [layer],
    });

    const view = new MapView({
      container,
      map,
    });

    layer.load().then(() => {
      view.extent = layer.fullExtent;
      this.zone.run(() => this.layerReady.emit(layer));
    });

    const basemapGallery = new BasemapGallery({
      view,
    });

    const bgExpand = new Expand({
      content: basemapGallery,
    });
    view.ui.add(bgExpand, 'top-right');

    const legend = new Legend({
      view,
    });
    const legendExpand = new Expand({
      content: legend,
      expanded: true,
    });
    view.ui.add(legendExpand, 'bottom-left');

    this.view = view;

    this.createLayerView(layer, view);

    return this.view.when();
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view. 4.17+
      this.view.destroy();
    }
  }

  private createLayerView(
    layer: __esri.FeatureLayer,
    view: __esri.MapView
  ): void {
    view
      .whenLayerView(layer)
      .then((layerView) =>
        this.zone.run(() => this.layerViewReady.emit(layerView))
      );
  }
}
```

Great! So now we have a map that renders a [`FeatureLayer`]() that's hosted by Esri. We can interact with the map's data by clicking on features, which reveal popups that contain the data associated with the geographic shape.

We'd like to take advantage of "attribute" data associated with these features. The features have a "Block Group" attribute, and we'd like to allow our users to select a block group from a dropdown. When a block group is selected, the map should zoom-to those feature and highlight them. Further, we'd like to treat this new tool as a "widget", so that it renders on the side of the map like the other tools.

## The `NgxWidget` Directive

One way to meet our requirements is with a structural directive. If you've never written a structural directive before, there's an [official guide](https://angular.io/guide/structural-directives) that can help get you started. The quintessential Structural Directive that all ng-devs are familiar with is `*ngIf`, which conditionally renders markup and components to the DOM. We'll write a directive called `NgxWidget`, which will be generated by the Angular CLI. The CLI will give us a default selector for the directive of `appNgxWidget`. By marking a component or HTML from our template with the directive `*appNgxWidget`, we can get fined grain control over how and when it renders. 

Since we'll be using the `MapView`'s [`DefaultUI`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-ui-DefaultUI.html) to add the component to the map, we'll have to accept the `MapView` object as an input to the directive. The `MapView` object's `ui` property,  has an `add` method, which we'll use in our directive to add the elements to the map in an Esri native way.

The `DefaultUI.add` method accepts a parameter to inform the API of where on the map we'd like to locate the widget. To support this option, we'll also accept a string value of `top-left`, `top-right`, `bottom-right`, or `bottom-left` as an input to the directive.

![Esri's DefaultUI](https://developers.arcgis.com/javascript/assets/img/apiref/views/views-ui-layout.jpg)

Structural directive inputs have a string naming convention, that requires the input to be prefixed by the directives selector. Since we're using the default selector provided by the CLI, all of our inputs will have to be prefixed by `appNgxWidget` in the directive code. When the directive is being used, both inputs can be passed using [Angular's microsyntax](https://angular.io/guide/structural-directives#microsyntax).

Here's an implementation of the directive, with more explanation to follow:

```typescript
import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appNgxWidget]',
})
export class NgxWidgetDirective implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject<null>();

  private hasView = false;
  private viewElement: HTMLElement | undefined = undefined;

  // Use rxjs to handle `@Input`s reactively
  // Use the selector as the input name to accept as the default input to the directive.
  @Input() public set appNgxWidget(val: __esri.MapView) {
    this._view.next(val);
  }

  @Input() public set appNgxWidgetPosition(val: __esri.UIAddPosition) {
    this._position.next(val);
  }

  private readonly _view = new BehaviorSubject<__esri.MapView>(undefined);
  private readonly view$ = this._view.asObservable();

  private readonly _position = new BehaviorSubject<__esri.UIAddPosition>({
    position: 'bottom-left',
    index: 0,
  });
  private readonly position$ = this._position.asObservable();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    combineLatest([this.view$, this.position$])
      .pipe(takeUntil(this._destroy$))
      .subscribe((params) => this.handleWidget(...params));
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private handleWidget(
    view: __esri.MapView,
    position: __esri.UIAddPosition
  ): void {
    if (this.hasView) {
      this.clear(view);
    }

    if (view != null && position != null) {
      this.viewElement = this.render();
      view.ui.add(this.viewElement, position);
    }
  }

  private render(): any {
    const embeddedView = this.viewContainerRef.createEmbeddedView(
      this.templateRef
    );

    const element = embeddedView.rootNodes[0];

    this.hasView = true;

    return element;
  }

  private clear(view?: __esri.MapView): void {
    if (view && this.viewElement) {
      view.ui.remove(this.viewElement);
    }
    this.viewContainerRef.clear();
    this.hasView = false;
  }
}

```

There's a fair bit going on in this code, so let's try to break it down. You can see that we're making heavy usage of `rxjs` in this directive's code. The `@Input`s are being managed by `BehaviorSubject`s, which allows us to provide default values for the directive. Since the `MapView`s default value is `undefined`, it's a required input. The `position` Input is optional, as it is defaulting to a value of `bottom-left` at `index` 0.

We're injecting our dependencies in the `constructor`, which include the [`TemplateRef`](https://angular.io/api/core/TemplateRef) and [`ViewContainerRef`](https://angular.io/api/core/ViewContainerRef). These dependencies are used to create an [Angular view](https://angular.io/guide/architecture), which are used to create our elements and renders them to the DOM.

Let's skip down to the `handleWidget` method. Here, we're checking to see if the directive already has a view. AKA, has this thing rendered yet? If it has, we'll clear the view, removing the elements from the DOM. If a `MapView` and `position` object are present, we'll render the template markup and store the parent element of the view on the directive. Then, we immediately add the elements to the map. 

The `render` method is pretty straightforward. It's using the `ViewContainerRef` to create an embedded view of the template (the HTML markup or component that we marked with the directive). We're making a hard assumption that the embedded view only has one element in the array, and returning that element.

The `clear` method simply checks if the `viewElement` exists on the class and if a valid `MapView` object is available. If so, we call the `view.ui.remove` method to delete the markup from the map. We then call the clear method on the Angular view, which will remove the elements from the page.

## Putting it Together

Now that we have this fancy directive, how do we use it? As long as the directive is available to our Module, we can use it directly in the HTML template of any component. We can mark native HTML elements to be added to the map, or, better yet, we can render custom components! Here's what the usage might look like:

```html
<h1>🤪 Angular Component as a Widget! 🤩</h1>

<app-esri-map
  (viewReady)="onViewReady($event)"
  (layerReady)="onLayerReady($event)"
  (layerViewReady)="onLayerViewReady($event)"
>
  <app-form-widget
    *appNgxWidget="view; position: { position: position, index: 1 }"
    class="ngx-widget"
    [blockGroups]="blockGroups"
    (valueChange)="onValueChange($event)"
  ></app-form-widget>
</app-esri-map>
```






## License

Some of the code in this repository is based on an Esri example, which is licensed under the Apache 2.0 license. Please visit the original source code and license here:
https://github.com/Esri/jsapi-resources/blob/master/license.txt

# #NgxWidget

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


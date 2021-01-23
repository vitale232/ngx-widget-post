import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  NgZone,
  Output,
  EventEmitter,
} from '@angular/core';

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import Expand from '@arcgis/core/widgets/Expand';
import config from '@arcgis/core/config.js';

/**
 * A simple Esri map using the beta ES Modules build.
 * This code is based on an Esri Github example. Learn more here:
 * https://github.com/vitale232/jsapi-resources/tree/master/esm-samples
 */
@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css'],
})
export class EsriMapComponent implements OnInit, OnDestroy {
  @Output() public viewReady = new EventEmitter<__esri.MapView>();
  @Output() public layerReady = new EventEmitter<__esri.FeatureLayer>();
  @Output() public layerViewReady = new EventEmitter<__esri.LayerView>();

  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  private view: __esri.MapView | null = null;

  constructor(private zone: NgZone) {}

  ngOnInit(): any {
    // Set this property when using routes in order to resolve the /assets correctly.
    // IMPORTANT: the directory path may be different between your product app and your dev app
    // config.assetsPath = "/assets";
    config.assetsPath = 'assets/';

    this.zone.runOutsideAngular(() => {
      // Initialize MapView and return an instance of MapView
      this.initializeMap().then((view) =>
        // The map has been initialized
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
      this.layerReady.emit(layer);
    });

    const basemapGallery = new BasemapGallery({
      view,
    });

    const bgExpand = new Expand({
      content: basemapGallery,
    });

    view.ui.add(bgExpand, 'top-right');

    this.view = view;

    this.createLayerView(layer, view);

    return this.view.when();
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }

  private createLayerView(
    layer: __esri.FeatureLayer,
    view: __esri.MapView
  ): void {
    view
      .whenLayerView(layer)
      .then((layerView) => this.layerViewReady.emit(layerView));
  }
}

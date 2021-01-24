import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Component as a Widget!</h1>

    <app-esri-map
      (viewReady)="onViewReady($event)"
      (layerReady)="onLayerReady($event)"
      (layerViewReady)="onLayerViewReady($event)"
    >
      <app-form-widget
        *appNgxWidget="view; position: { position: 'bottom-right', index: 0 }"
        class="ngx-widget"
        [blockGroups]="blockGroups"
        (valueChange)="onValueChange($event)"
      ></app-form-widget>
    </app-esri-map>
  `,
  styles: [
    `
      .ngx-widget {
        width: 200px;
        height: 120px;
        background-color: white;
      }
    `,
  ],
})
export class AppComponent {
  public view: __esri.MapView;
  public layer: __esri.FeatureLayer;
  public features: __esri.Graphic[];
  public blockGroups: string[];

  private layerView: __esri.FeatureLayerView;
  private highlightHandle: __esri.Handle;

  onViewReady(view: __esri.MapView) {
    this.view = view;
  }

  onLayerReady(layer: __esri.FeatureLayer): void {
    this.layer = layer;
    const query = layer.createQuery();
    query.where = '1=1';

    layer.queryFeatures(query).then((featureSet) => {
      this.features = featureSet.features;

      this.blockGroups = Array.from(
        new Set(this.features.map((feat) => feat.getAttribute('NAMELSAD')))
      ).sort();
    });
  }

  onValueChange(val: string): void {
    if (this.layer && this.view) {
      const query = this.layer.createQuery();
      query.where = `NAMELSAD = '${val}'`;

      this.layer.queryFeatures(query).then((featureSet) => {
        this.highlightHandle?.remove();
        this.view.goTo(featureSet.features);
        this.highlightHandle = this.layerView.highlight(featureSet.features);
      });
    }
  }

  onLayerViewReady(layerView: __esri.FeatureLayerView): void {
    this.layerView = layerView;
  }
}

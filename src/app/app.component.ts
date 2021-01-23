import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public view: __esri.MapView = undefined;
  public layer: __esri.FeatureLayer = undefined;
  public features: __esri.Graphic[] = undefined;
  public blockGroups: string[] = undefined;

  private layerView: __esri.FeatureLayerView = undefined;
  private highlightHandle: __esri.Handle;

  constructor(private ngZone: NgZone) {}

  onViewReady(view: __esri.MapView) {
    this.view = view;
  }

  onLayerReady(layer: __esri.FeatureLayer): void {
    this.layer = layer;
    const query = layer.createQuery();
    query.where = '1=1';

    layer.queryFeatures(query).then((featureSet) => {
      this.features = featureSet.features;

      // The layer lives outside of the zone, so let's bring it back in for Change Detection
      this.ngZone.run(
        () =>
          (this.blockGroups = Array.from(
            new Set(this.features.map((feat) => feat.getAttribute('NAMELSAD')))
          ).sort())
      );
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

  onClear(): void {
    this.highlightHandle?.remove();
  }
}

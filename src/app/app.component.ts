import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Component as a Widget!</h1>

    <app-esri-map
      (viewReady)="onViewReady($event)"
      (layerReady)="onLayerReady($event)"
      (layerViewReady)="onLayerViewReady($event)"
    >
      <div
        class="ngx-widget"
        *appNgxWidget="
          view;
          position: { position: position, index: 0 };
          expand: true;
          expanded: true;
          expandIconClass: 'esri-icon-search'
        "
      >
        <app-form-widget
          [blockGroups]="blockGroups"
          (valueChange)="onValueChange($event)"
        ></app-form-widget>
      </div>
    </app-esri-map>
    <div class="button-group">
      <button mat-raised-button (click)="onMoveWidgetClick('top-left')">
        Move Widget - Top Left
      </button>
      <button mat-raised-button (click)="onMoveWidgetClick('top-right')">
        Move Widget - Top Right
      </button>
    </div>
    <div class="button-group">
      <button mat-raised-button (click)="onMoveWidgetClick('bottom-left')">
        Move Widget - Bottom Left
      </button>
      <button mat-raised-button (click)="onMoveWidgetClick('bottom-right')">
        Move Widget - Bottom Right
      </button>
    </div>
  `,
  styles: [
    `
      .ngx-widget {
        width: 200px;
        height: 120px;
        background-color: white;
        padding: 5px;
      }
      .button-group {
        padding-top: 1.5rem;
        display: flex;
        justify-content: center;
      }
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class AppComponent {
  public view: __esri.MapView;
  public layer: __esri.FeatureLayer;
  public features: __esri.Graphic[];
  public blockGroups: string[];
  public position = 'bottom-right';

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

  onMoveWidgetClick(position: string): void {
    this.position = position;
  }
}

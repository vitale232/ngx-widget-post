import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public view: __esri.MapView = undefined;

  onViewReady(view: __esri.MapView) {
    console.log('View ready', view);
    this.view = view;
  }
}

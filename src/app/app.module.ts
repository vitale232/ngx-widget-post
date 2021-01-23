import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { NgxWidgetDirective } from './ngx-widget.directive';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    NgxWidgetDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

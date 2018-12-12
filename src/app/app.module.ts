import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { VisualizationComponent } from './visualization/visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ReportsComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

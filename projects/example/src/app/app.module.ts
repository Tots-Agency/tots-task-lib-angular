import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TotsTaskModule } from 'projects/tots/task/src/public-api';
import { ExampleGroupComponent } from './pages/example-group/example-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TotsTaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BulbDirective } from './bulb/bulb.directive';

@NgModule({
  declarations: [
    AppComponent,
    BulbDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'vp-app';
}

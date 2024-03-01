import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirectives/SetBackground.directive';
import { CustomDirectiveModule } from './CustomDirectives/custom-directive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomDirectiveModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

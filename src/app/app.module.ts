import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FilmeListComponent} from './filme-list/filme-list.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

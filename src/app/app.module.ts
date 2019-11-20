import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import {FilmeService} from './service/filme.service';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

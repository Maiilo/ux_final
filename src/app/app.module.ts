import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaberComponent } from './saber/saber.component';
import { CompetenciasComponent } from './competencias/competencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaberComponent,
    CompetenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

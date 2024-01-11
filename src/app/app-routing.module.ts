import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { SaberComponent } from './saber/saber.component';
import { CompetenciasComponent } from './competencias/competencias.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'saber', component: SaberComponent},
    {path: 'competencias', component: CompetenciasComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemesComponent} from './themes/themes.component';
import {GaleriesComponent} from './galeries/galeries.component';
import {DevisComponent} from './devis/devis.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'themes', component: ThemesComponent },
  { path: 'galeries', component: GaleriesComponent },
  { path: 'devis', component: DevisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


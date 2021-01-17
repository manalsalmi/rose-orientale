import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ThemesComponent} from './themes/themes.component';
import {GaleriesComponent} from './galeries/galeries.component';
import {DevisComponent} from './devis/devis.component';
import {ComponentsModule} from './components/components.module';
import { ClientSatisfactionComponent } from './client-satisfaction/client-satisfaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemesComponent,
    GaleriesComponent,
    DevisComponent,
    ClientSatisfactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

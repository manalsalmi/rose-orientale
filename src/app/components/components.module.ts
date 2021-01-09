import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ]
})
export class ComponentsModule {
}

import { HeaderModule } from './componentes/header/header.module';
import { HeaderComponent } from './componentes/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './componentes/footer/footer.component';
import { FooterModule } from './componentes/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HeaderModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

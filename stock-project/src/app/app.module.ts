import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './router/router.module';
import { StockBodyComponent } from './body/stock-body.component';
import { HeaderComponent } from './header/header.component';
import { CompanyBodyComponent } from './body/company-body.component';
import { CompanyStockBodyComponent } from './body/company-stock-body.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    StockBodyComponent,
    HeaderComponent,
    CompanyBodyComponent,
    CompanyStockBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

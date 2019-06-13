import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { StockBodyComponent } from '../body/stock-body.component';
import { CompanyBodyComponent } from '../body/company-body.component';
import { CompanyStockBodyComponent } from '../body/company-stock-body.component';

const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'body/details/:symbol/:date', component: StockBodyComponent },
  { path: 'companySeach', component: CompanyBodyComponent },
  { path: 'companySeach/details/:symbol', component: CompanyStockBodyComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';
import { ReportsRoutingModule } from './reports-routing.module';



@NgModule({
  declarations: [SalesComponent, ProductsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }

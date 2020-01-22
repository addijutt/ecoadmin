import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

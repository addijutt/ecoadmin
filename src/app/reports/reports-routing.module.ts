  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: '' ,component: SalesComponent },
      {path: 'view' , component: ProductsComponent}

    //   {path: 'add/:id' ,component: AddComponent },
    //   { path: ':id' , component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
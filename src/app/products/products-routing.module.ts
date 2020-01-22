  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ListComponent }, 
      {path: 'add' ,component: AddComponent }
    //   {path: 'add/:id' ,component: AddComponent },
    //   { path: ':id' , component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
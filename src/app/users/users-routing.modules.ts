  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ListComponent }, 
      {path: 'add' ,component: AddComponent },
      {path: 'view' ,component: ViewComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
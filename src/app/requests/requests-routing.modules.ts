  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ListComponent }, 
      {path: 'create' ,component: CreateComponent },
      {path: 'view' , component: ViewComponent}
    //   {path: 'add/:id' ,component: AddComponent },
    //   { path: ':id' , component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
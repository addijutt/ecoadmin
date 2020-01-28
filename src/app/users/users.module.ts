import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UsersRoutingModule } from './users-routing.modules';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule

  ]
})
export class UsersModule { }

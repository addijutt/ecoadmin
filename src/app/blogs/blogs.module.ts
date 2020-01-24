import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '' , component: HomeComponent },
  { path: '',  component: ListComponent},
  {path: 'create' , component: CreateComponent },
  {path: 'detail' , component: DetailComponent },

];


@NgModule({
  declarations: [CreateComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogsModule { }

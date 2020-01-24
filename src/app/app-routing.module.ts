import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { RequestsComponent } from './requests/requests.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { NotificationComponent } from './notification/notification.component';
import { HomeComponent } from './home/home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { OrdersModule } from './orders/orders.module';


const routes: Routes = [
  // { path: '' , component: HomeComponent },
  { path: 'dash',  component:DashboardComponent},
  { path: '',  redirectTo: '/dash', pathMatch: 'full' }, 
  {path: 'mailbox' , component: MailboxComponent },
  {path: 'settings' , component: SettingsComponent },
  {path: 'reports' , component: ReportsComponent },
  {path: 'requests' , component: RequestsComponent },
 { path: 'products' , loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
 { path: 'orders' , loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
 { path: 'blog' , loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },





  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { NotificationComponent } from './notification/notification.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { OrdersModule } from './orders/orders.module';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  // { path: '' , component: HomeComponent },
  { path: 'dash',  component:DashboardComponent},
  { path: '',  redirectTo: '/dash', pathMatch: 'full' }, 
  {path: 'mailbox' , component: MailboxComponent },
  {path: 'profile' , component: ProfileComponent },
  {path: 'settings' , component: SettingsComponent },
 { path: 'products' , loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
 { path: 'orders' , loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
 { path: 'blog' , loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
 { path: 'requests' , loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule) },
 { path: 'users' , loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
 { path: 'reports' , loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

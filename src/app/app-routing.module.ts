import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';

const routes: Routes = [
  { path: 'customer-signup', component: CustomerSignupComponent},
  { path: 'customer-login', component: CustomerLoginComponent},
  { path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: 'staff-login', component: StaffLoginComponent},
  { path: 'staff-dashboard', component: StaffDashboardComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

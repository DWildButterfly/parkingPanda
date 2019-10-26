import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent  } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
const routes: Routes = [
  {
  path: '',
  component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
    },
    {
      path: 'dashboard',
      component:DashboardComponent
      },
      {
        path:'admin-login',
        component:AdminLoginComponent
      },
      {
        path:'admin-panel',
        component:AdminPanelComponent
      },
      {
        path:'admin-create',
        component:AdminCreateComponent
      },
      {
        path:'admin-view',
        component:AdminViewComponent
      },
      {
        path:'edit/:sno',
        component:AdminCreateComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

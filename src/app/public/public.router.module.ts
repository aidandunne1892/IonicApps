import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: 'public',
    component: PublicPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: '../register/register.module#RegisterPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/public/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/public/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicPageRoutingModule {}

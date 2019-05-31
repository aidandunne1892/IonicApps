import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivatePage } from './private.page';

const routes: Routes = [
  {
    path: 'private',
    component: PrivatePage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: '../feed/feed.module#FeedPageModule'
          }
        ]
      },
      {
        path: 'appointments',
        children: [
          {
            path: '',
            loadChildren: '../appointments/appointments.module#AppointmentsPageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrivatePageRoutingModule {}

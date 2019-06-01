import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentsPage } from './appointments.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AppointmentsPage }])
  ],
  declarations: [AppointmentsPage]
})
export class AppointmentsPageModule {}

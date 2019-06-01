import { Component, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.page.html',
  styleUrls: ['appointments.page.scss']
})
export class AppointmentsPage {

  constructor(public toastController: ToastController){}
  
  async presentToast() {
   const toast = await this.toastController.create({
     buttons: [
       {
         side: 'start',
         icon: 'star',
         text: 'Favorite',
         handler: () => {
           console.log('Favorite clicked');
         }
       }, {
         text: 'Done',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   toast.present();
 }

}

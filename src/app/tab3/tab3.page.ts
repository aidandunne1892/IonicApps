import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public toastController: ToastController) {}

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

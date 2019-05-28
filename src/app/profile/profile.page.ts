import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(public actionSheetCtrl: ActionSheetController,public alertController: AlertController,) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Account Information',
      buttons: [{
        text: 'Delete Account',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Change Name',
        icon: 'share',
        handler: () => {
          console.log('Name Change clicked');
        }
      }, {
        text: 'Change Address',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Change Address clicked');
        }
      }, {
        text: 'Edit Favorites',
        icon: 'heart',
        handler: () => {
          console.log('Edit Favorites clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

}

import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  userEmail: string;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    private navCtrl: NavController,
    private authService: AuthenticationService
    ) {}
  
  
  ngOnInit(){

    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('/public/login');
    }
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('/public/login');
    })
    .catch(error => {
      console.log(error);
    })
  }


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

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router ) { }

  ngOnInit() {
  }

  async signUp() {
    const { username, password, cpassword } = this
    if (password !== cpassword){
      this.showAlert("Error", "Passwords do not match!")
      return console.error('Passwords dont match');
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password);
      this.showAlert("Success", "Account has been created")
      this.router.navigate(['/tabs/home'])
      console.log(res);

    } catch (err) {

      console.log(err);
      this.showAlert("Error", err.message)

    }
}

  async showAlert(header: string, message: string) {
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["Ok"]
      })

      await alert.present()
  }

}

import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { AngularFirestore } from '@angular/fire/firestore'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    public alert: AlertController,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
     ) { }


  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  tryRegister(value){
    this.authService.registerUser(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Your account has been created. Please log in.";
       this.showAlert("Success", this.successMessage);
       this.validations_form.reset()
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
       this.showAlert("Error", this.errorMessage);
     })
  }
 
  goLoginPage(){
    this.navCtrl.navigateBack('/tabs/login');
  }

  async showAlert(header: string, message: string) {
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["OK"]
      })

      await alert.present()
  }

}

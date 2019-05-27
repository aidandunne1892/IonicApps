import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async signUp(){
    const { username, password, cpassword } = this
    if(password !== cpassword){
      return console.error("Passwords dont match")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + "@gmail.com", password)
      console.log(res)

    } catch(err) {

      console.log(err)

    }
}

}

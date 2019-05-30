import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { IonicStorageModule } from '@ionic/storage';
import { AuthenticationService } from './services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

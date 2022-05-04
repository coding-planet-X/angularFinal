import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './modules/material.module';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import * as afa from '@angular/fire/auth'
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment} from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {APP_BASE_HREF} from '@angular/common';
import { DetailRecComponent } from './components/detail-rec/detail-rec.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    SidenavComponent,
    CartComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent,
    DetailRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    afa.AuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // <-- add this
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(
      {
        projectId: 'makeup-d57e6',
        appId: '1:177000206273:web:b09b25aa32406dc0742940',
        databaseURL: 'https://makeup-d57e6-default-rtdb.firebaseio.com',
        storageBucket: 'makeup-d57e6.appspot.com',
        apiKey: 'AIzaSyCUX8aVl9LOz6u-GT061uT0p2mpyD-bg2g',
        authDomain: 'makeup-d57e6.firebaseapp.com',
        messagingSenderId: '177000206273',
        measurementId: 'G-7PR6X8R7N6',
      },
       () => 'your_app_name_factory',
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
        useRawUserCredential: true, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

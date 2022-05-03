import { Component, OnInit } from '@angular/core';
import { Makeup } from 'src/app/interfaces/makeup';
import {MakeupService} from '../../services/makeup.service'
import {Router} from '@angular/router'
import * as afa from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {AuthProvider} from 'ngx-auth-firebaseui';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;
  constructor(private makeserv:MakeupService,
    private router:Router,
    public auth: afa.AngularFireAuth,) { }

  ngOnInit(): void {
  }
  loggers(){
    this.router.navigate(['/home'])
  }

}

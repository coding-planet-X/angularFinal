import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/interfaces/menu-item';
import {MakeupService} from '../../services/makeup.service'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems: MenuItem[] =[
    {
      name:'Home',
      route:'/home',
      icon:'home'
    },
    {
      name:'Login/logout',
      route:'/login',
      icon:"login"
    }
  ]
  cookieValue!:string
  constructor(private makeserv:MakeupService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

}

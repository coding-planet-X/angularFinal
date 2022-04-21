import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

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
    }
  ]
  cookieValue!:string
  constructor() { }

  ngOnInit(): void {

  }

}

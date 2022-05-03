import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {MakeupService} from '../../services/makeup.service';
import {Makeup} from '../../interfaces/makeup';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],

})
export class ProductSearchComponent implements OnInit {
  contLoaded!: Promise<boolean>

  vale: {id:number, name:string}[] =[
    {id:1, name:"uno"},
    {id:2, name:"dos"},
    {id:3, name:"tres"},
    {id:4, name:"cuatro"},
    {id:5, name:"cinco"},

  ]
  loaded!: Makeup[]
  
  constructor(
    private makeserv:MakeupService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.firstLoad()
    
    
  }
  async firstLoad(){
    console.log(this.makeserv.loaded)
    if(this.makeserv.loaded==true){
      this.loaded=  this.makeserv.returnProducts()
    }
    else{
    await this.makeserv.getProducts().subscribe((oba) =>{
      this.loaded = oba

      this.contLoaded = Promise.resolve(true)
    })
  }
  }
  sendBackFirstLoad(){
    console.log('gg')
    this.makeserv.saveProducts(this.loaded)
  } 
  loadCon(){
    
    console.log(this.loaded)
  }
  getId(id:number){
    this.sendBackFirstLoad()
    console.log(id)
    //this.router.navigate(['/details' , id])
    
  }


}

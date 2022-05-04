import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {MakeupService} from '../../services/makeup.service';
import {Makeup} from '../../interfaces/makeup';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Brand} from './../../interfaces/brand'
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],

})
export class ProductSearchComponent implements OnInit {
  contLoaded!: Promise<boolean>
  prod_type:string[]=this.makeserv.product_type
  brands:Brand[]=this.makeserv.brand
  brandy!:string;
  prody!:string;
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

    await this.makeserv.getProducts().subscribe((oba) =>{
      this.loaded = oba

      this.contLoaded = Promise.resolve(true)
    })
  }
  sendBackFirstLoad(){
    console.log('gg')
    this.makeserv.saveProducts(this.loaded)

  } 
  loadCon(){
    
    console.log(this.loaded)
  }
  getId(id:number){
    this.makeserv.the_id=id
    this.router.navigate(['/details' , id])
    
  }
 async filter(b:string,p:string){
    console.log(b)
    console.log(p)
    if((b!=undefined)&&(p!=undefined)){
      await this.makeserv.getProdAndBrand(b,p).subscribe((oba) =>{
        this.loaded = oba


        this.contLoaded = Promise.resolve(true)
    })

    
    } 
    else if((b!=undefined) &&(p==undefined)){
      await this.makeserv.getByBrand(b).subscribe((oba) =>{
        this.loaded = oba


        this.contLoaded = Promise.resolve(true)
    })
    }
    else if((b==undefined)&&(p!=undefined)){
      await this.makeserv.getByProd(p).subscribe((oba) =>{
        this.loaded = oba


        this.contLoaded = Promise.resolve(true)
    })

    }
    else{
      await this.makeserv.getProducts().subscribe((oba) =>{
        this.loaded = oba
  
        this.contLoaded = Promise.resolve(true)
      })
    }


}
}
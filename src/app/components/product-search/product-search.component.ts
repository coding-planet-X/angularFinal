import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {MakeupService} from '../../services/makeup.service';
import {Makeup} from './../../interfaces/makeup';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  contLoaded!: Promise<boolean>
  vale!:string
  loaded!: Makeup[]
  constructor(
    private makeserv:MakeupService,
  ) { }

  ngOnInit(): void {
    this.firstLoad()
    
    
  }
  async firstLoad(){
    await this.makeserv.getProducts().subscribe((oba) =>{
      this.loaded = oba

      this.contLoaded = Promise.resolve(true)
    })
  }
  sendBackFirstLoad(){
    this.makeserv.saveProducts(this.loaded)
  } 
  loadCon(){
    
    console.log(this.loaded)
  }


}

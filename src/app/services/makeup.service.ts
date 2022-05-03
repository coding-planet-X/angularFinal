import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{catchError, map, Observable, throwError} from 'rxjs';

import {Makeup} from '../interfaces/makeup' 
@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  products: Makeup[]=[]

  loaded=false;
  loggedIn=false
  constructor( 
    private http: HttpClient,
  
  ) {
   }
  getProducts():Observable<Makeup[]>{
    this.loaded=true
    const headers = {}
    return this.http.get<Makeup[]>(`https://makeup-api.herokuapp.com/api/v1/products.json`, {headers}).pipe(
      map(response=>response)
    )
  }
  saveProducts(mu:Makeup[]){
    this.products = mu
    
  }
  returnProducts(){
    return this.products
  }
  getById(id:number):Observable<Makeup>{
    return this.http.get<Makeup>(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`).pipe(
      map(response=>response)
    )
  }
}

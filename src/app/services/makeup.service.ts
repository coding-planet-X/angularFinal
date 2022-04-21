import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{map, Observable} from 'rxjs';
import {Makeup} from './../interfaces/makeup' 
@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  products: Makeup[]=[]
  constructor( 
    private http: HttpClient,
  ) { }
  getProducts():Observable<Makeup[]>{
    return this.http.get<Makeup[]>(`http://makeup-api.herokuapp.com/api/v1/products.json`).pipe(
      map(response=>response)
    )
  }
  saveProducts(mu:Makeup[]){
    this.products = mu
  }
}

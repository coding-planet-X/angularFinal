import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{catchError, map, Observable, throwError} from 'rxjs';
import{Brand} from '../interfaces/brand'
import {Makeup} from '../interfaces/makeup';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  products: Makeup[]=[]
  private prodsRef: AngularFirestoreCollection<Makeup>;
  loaded=false;
  loggedIn=false;
  the_id!:number
  product_type:string[] = ['blush','bronzer','eyebrow','eyeliner','eyeshadow','foundation','lip_liner','lipstick','mascara','nail_polish']
  brand:Brand[] = [{name:'none', value:undefined},
                   {name:'almay',value:"almay"},
                   {name:'alva',value:'alva'},
                   {name:'anna sui', value:'anna%20sui'},
                   {name:'annabelle',value:'annabelle'},
                   {name:'benefit',value:'benefit'},
                   {name:'boosh', value:'boosh'},
                   {name:"burt's bees", value:'burt%27s%20bees'},
                   {name:'butter london', value:'butter%20london'},
                   {name:"c'est moi", value:'c%27est%20moi'},
                   {name:"cargo cosmetics", value:'cargo%20cosmetics'},
                   {name:'china glaze', value:'china%20glaze'},
                   {name:'clinique', value:'clinique'},
                   {name:'coastal classic creation', value:'coastal%20classic%20creation'},
                   {name:'colourpop', value:'colourpop'},
                   {name:'covergirl', value:'covergirl'},
                   {name:'dalish', value:'dalish'},
                   {name:'deciem', value:'deciem'},
                   {name:'dior', value:'dior'},
                   {name:'dr. hauschka', value:'dr.%20hauschka'},
                   {name:'e.l.f.', value:'e.l.f.'},
                   {name:'essie', value:'essie'},
                   {name:'fenty', value:'fenty'},
                   {name:'glossier', value:'glossier'},
                   {name:"green people", value:"green%20people"},
                   {name:"iman", value:"iman"},
                   {name:"l'oreal", value:"l%27oreal"},
                   {name:"lotus cosmetics usa", value:"lotus%20cosmetics%20usa"},
                   {name:"maia's mineral galaxy", value:"maia%27s%20mineral%20galaxy"},
                   {name:"marcelle", value:"marcelle"},
                   {name:"marienatie", value:"marienatie"},
                   {name:"maybelline", value:"maybelline"},
                   {name:"malani", value:"malani"},
                   {name:"mineral fusion", value:"mineral%20fusion"},
                   {name:"misa", value:"misa"},
                   {name:"mistura", value:"mistura"},
                   {name:"moov", value:"moov"},
                   {name:"nudus", value:"nudus"},
                   {name:"nyx", value:"nyx"},
                   {name:"orly", value:"orly"},
                   {name:"pacifica", value:"pacifica"},
                   {name:"penny lane organics", value:"penny%20lane%20organics"},
                   {name:"physicians formula", value:"physicians%20formula"},
                   {name:"piggy paint", value:"piggy%20paint"},
                   {name:"pure anada", value:"pure%20anada"},
                   {name:"rejuva minerals", value:"rejuva%20minerals"},
                   {name:"revlon", value:"revlon"},
                   {name:"sally b's skin yummies", value:"sally%20b%27s%20skin%20yummies"},
                   {name:"salon perfect", value:"salon%20perfect"},
                   {name:"sante", value:"sante"},
                   {name:"sinful colours", value:"sinful%20colours"},
                   {name:"smashbox", value:"smashbox"},
                   {name:"stila", value:"stila"},
                   {name:"suncoat", value:"suncoat"},
                   {name:"w3llpeople", value:"w3llpeople"},
                   {name:"wet n wild", value:"wet%20n%20wild"},
                   {name:"zorah", value:"zorah"},
                   {name:"zorah biocosmetiques", value:"zorah%20biocosmetiques"},
                    ]
  private errorHandler(error:Error) {
    console.log(error);
    return throwError(error);
  }
  constructor( 
    private http: HttpClient,
    private db: AngularFirestore,
    
  ) {
    this.prodsRef = this.db.collection<Makeup>('product');
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
  getProdAndBrand(b:string,p:string):Observable<Makeup[]>{
    return this.http.get<Makeup[]>(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${b}&product_type=${p}`).pipe(
      map(response=>response)
    )
  }
  getByBrand(b:string):Observable<Makeup[]>{
    return this.http.get<Makeup[]>(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${b}`).pipe(
      map(response=>response)
    )
  }
  getByProd(p:string):Observable<Makeup[]>{
    return this.http.get<Makeup[]>(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${p}`).pipe(
      map(response=>response)
    )
  }
  /*getAllproducts(){
    return this.prodsRef.snapshotChanges().pipe(map((items:DocumentChangeAction<Makeup>[]):Makeup[]=>{
      return items.map((item: DocumentChangeAction<Makeup>):Makeup =>{
        return {
          id: item.payload.doc.data().id,
          name: item.payload.doc.data().name,
          brand: item.payload.doc.data().brand,
          price: item.payload.doc.data().price,
          price_sign: item.payload.doc.data().price_sign,
          currency:item.payload.doc.data().currency,
          image_link:item.payload.doc.data().image_link,
          product_link:item.payload.doc.data().product_link,
          website_link:item.payload.doc.data().website_link,
          description:item.payload.doc.data().website_link,
          rating: item.payload.doc.data().rating,
          category:item.payload.doc.data().website_link,
          product_type:item.payload.doc.data().website_link,
          tag_list:item.payload.doc.data().tag_list,
          created_at:item.payload.doc.data().website_link,
          updated_at:item.payload.doc.data().website_link,
          product_api_url:item.payload.doc.data().website_link,
          api_featured_image:item.payload.doc.data().website_link,
          product_colors:item.payload.doc.data().product_colors
        }
      })
    }),
    catchError(this.errorHandler)
    )
   }
  addProducts() {
    for(let i =0;i<this.products.length;i++){
      this.db.collection('products').add(this.products[i])
    }
  }*/
   
}

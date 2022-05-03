import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSearchComponent} from '../components/product-search/product-search.component';
import {DetailsComponent} from '../components/details/details.component'
import {LoginComponent} from '../components/login/login.component'
import {SignupComponent} from '../components/signup/signup.component'
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthGuard, canActivate } from '@angular/fire/compat/auth-guard';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: ProductSearchComponent,canActivate:[AngularFireAuthGuard]},
  {path:'details/:id', component:DetailsComponent, canActivate:[AngularFireAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

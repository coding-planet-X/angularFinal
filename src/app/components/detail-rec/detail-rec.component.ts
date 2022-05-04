import { Component, Input, OnInit } from '@angular/core';
import {MakeupService} from './../../services/makeup.service'
import {Makeup} from '../../interfaces/makeup'
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-rec',
  templateUrl: './detail-rec.component.html',
  styleUrls: ['./detail-rec.component.scss']
})
export class DetailRecComponent implements OnInit {
  @Input() product_type!:string;
  reco!:Makeup[]
  constructor(
    private makeserv:MakeupService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.makeserv.getByProd(this.product_type).subscribe(oba=>this.reco=oba)
  }
  getId(id:number){
    this.makeserv.the_id=id
    this.router.navigate(['/details' , id])
    
  }

}

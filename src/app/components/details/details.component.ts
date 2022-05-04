import { Component, OnInit } from '@angular/core';
import {MakeupService} from '../../services/makeup.service';
import {Makeup} from '../../interfaces/makeup';
import {switchMap, tap} from 'rxjs'
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product!:Makeup;
  constructor(
    private makeserv:MakeupService,
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.makeserv.getById(params['id'])
      }),
      tap(game => this.product = game)
    ).subscribe();
  }

}

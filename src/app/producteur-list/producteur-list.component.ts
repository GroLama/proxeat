import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbServiceService } from '../db-service.service';
import { ProducteurInterface } from '../interfaces/ProducteurInterface';

@Component({
  selector: 'app-producteur-list',
  templateUrl: './producteur-list.component.html',
  styleUrls: ['./producteur-list.component.css'],
})
export class ProducteurListComponent implements OnInit {
  producteurList$:Observable<ProducteurInterface[]> = new Observable();
displayData() {
  this.dbService.displayProd()
}
  
  constructor(private dbService:DbServiceService) {}

  ngOnInit(): void {
    this.dbService.startFetch()
    this.producteurList$ = this.dbService.producteurEvent
    this.producteurList$.subscribe(data=>{

    })
  }
}
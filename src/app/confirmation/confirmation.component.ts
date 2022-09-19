import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbServiceService } from '../db-service.service';
import { ProducteurInterface } from '../interfaces/ProducteurInterface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  producteurInfo:Observable<ProducteurInterface> = new Observable()
  name:string=''
  heure:string=''
  constructor(private dbService:DbServiceService) { }

  ngOnInit(): void {
    this.producteurInfo = this.dbService.producteurInfoEvent;
    this.producteurInfo.subscribe();
    this.dbService.getProducteurInfo()
    this.producteurInfo.forEach(data=>{
      this.name = data.name;
      this.heure = data.horaires

    })

  }

}

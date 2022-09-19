import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DbServiceService } from '../db-service.service';
import { History } from '../interfaces/history';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reglement',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.css']
})
export class ReglementComponent implements OnInit {

  productHistory:History[]=[];
  total:number=0;
  faTrash = faTrash;
  constructor(private dbService:DbServiceService,private router:Router) {
    render(
      {
          id: "#payments",
          currency: "EUR",
          value: "100.00",
          onApprove: (details) => {
            alert("Transaction is succes");
          }
        }
      );
  }

  ngOnInit(): void {
    let tempHisto = this.dbService.getProductsHistory()
    tempHisto.forEach(item=>{
      this.productHistory.push(item)
    })
    this.calculateTotal()
    console.log(this.dbService.producteurID);


  }
  decreaseQuantity(index:number){
    if(this.productHistory[index].quantity>0){
      this.productHistory[index].quantity --;
    }
    this.calculateTotal()

  }
  calculateTotal(){
    this.total=0;
    this.productHistory.forEach(item=>{
      console.log(item);

      this.total += item.price*item.quantity
    })
  }
  callStoreHistory(){
    this.dbService.storeProductHistory(this.dbService.getUserUID(),this.productHistory);
    this.router.navigate(['/confirmation'])
  }

}

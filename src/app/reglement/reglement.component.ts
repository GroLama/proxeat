import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reglement',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.css']
})
export class ReglementComponent implements OnInit {

  faTrash = faTrash;
  constructor() { 
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
  }

}

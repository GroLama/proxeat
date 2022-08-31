import { Component, Input, OnInit } from '@angular/core';
import { ProducteurInterface } from '../interfaces/ProducteurInterface';

@Component({
  selector: 'app-producteur-card',
  templateUrl: './producteur-card.component.html',
  styleUrls: ['./producteur-card.component.css']
})
export class ProducteurCardComponent implements OnInit {

  @Input() producteur?:ProducteurInterface;
  constructor() { }

  ngOnInit(): void {
  }

}

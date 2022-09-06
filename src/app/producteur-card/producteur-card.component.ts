import { Component, Input, OnInit } from '@angular/core';
import { ProducteurInterface } from '../interfaces/ProducteurInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producteur-card',
  templateUrl: './producteur-card.component.html',
  styleUrls: ['./producteur-card.component.css']
})
export class ProducteurCardComponent implements OnInit {

  @Input() producteur?:ProducteurInterface;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToMenu(){
    this.router.navigate(['/menu'])
  }
}

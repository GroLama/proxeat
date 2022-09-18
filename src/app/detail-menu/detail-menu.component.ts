import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { DbServiceService } from '../db-service.service';
import { Products } from '../products';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {
  faCartPlus = faCartPlus;
  id:number=0;
  urlImg:string='';
  productsList$:Observable<Products[]> = new Observable();
  productAdd=[{item:'',price:0,quantity:0}];
  firstAdd=false;
  constructor(private route:ActivatedRoute,private dbService:DbServiceService) { }

  ngOnInit(): void {

   let tempId =  this.route.snapshot.paramMap.get('id');
   if(tempId != null){
    this.id = parseInt(tempId)
   }
   let tempUrl = this.route.snapshot.paramMap.get('url');
   if(tempUrl!=null){
    this.urlImg = tempUrl
   }
   this.dbService.getProductList(this.id)
   this.productsList$ = this.dbService.productsListEvent
   this.productsList$.subscribe()

  }
  addProduct(produit:string,prix:number){
    let i = this.productAdd.findIndex(e=>e.item === produit);
    if(i>-1){
      this.productAdd[i].quantity ++;
    }
    else{
      if(this.productAdd.length===1 && !this.firstAdd){
        this.productAdd.pop()
        this.firstAdd = true;
      }
      this.productAdd.push({item:produit,price:prix,quantity:1});
    }
    console.log(this.productAdd);

  }
  navigateToReglement(){}
}
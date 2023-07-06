import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { ProducteurInterface } from '../interfaces/ProducteurInterface';
import { map } from 'rxjs/operators';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-producteur-list',
  templateUrl: './producteur-list.component.html',
  styleUrls: ['./producteur-list.component.css'],
})
export class ProducteurListComponent implements OnInit {
  producteurList$: Observable<ProducteurInterface[]> = new Observable();
  filteredProducteurs: ProducteurInterface[] = [];
  searchTerm: string = '';
  sortedProducteurs$: Observable<ProducteurInterface[]> = of([]); // Initialise sortedProducteurs$

  constructor(private dbService: DbServiceService,  private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.dbService.startFetch();
    this.sortedProducteurs$ = this.dbService.producteurEvent.pipe(
      switchMap(producteurs =>
        from(this.sortProducteursByLikes(producteurs))
      )
    );
    this.producteurList$ = this.dbService.producteurEvent.pipe(
      map(producteurs => {
        // recherche
        if (this.searchTerm) {
          return producteurs.filter(producteur =>
            producteur.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        } else {
          return producteurs;
        }
      })
    );
    
    
    this.producteurList$.subscribe(producteurs => {
      this.filteredProducteurs = producteurs;
      console.log('Filtered producteurs:', this.filteredProducteurs);
    });
  }

  async sortProducteursByLikes(producteurs: ProducteurInterface[]): Promise<ProducteurInterface[]> {
    const producteursWithLikes = await Promise.all(
      producteurs.map(async producteur => {
        const likes = await this.firestore.collection('like', ref => ref.where('producteurId', '==', producteur.id)).get().toPromise();
        const likeCount = likes ? likes.size : 0; // Check if likes is not undefined before trying to access size
        return { ...producteur, likes: likeCount };
      })
    );
    return producteursWithLikes.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  }


  displayData() {
    this.dbService.displayProd();
  }

  onSearch(): void {
    console.log('onSearch called');
  console.log('Search term:', this.searchTerm);
    this.filteredProducteurs = this.filteredProducteurs.filter(producteur =>
      producteur.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
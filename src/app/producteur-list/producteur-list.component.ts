import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DbServiceService } from '../db-service.service';
import { ProducteurInterface } from '../interfaces/ProducteurInterface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-producteur-list',
  templateUrl: './producteur-list.component.html',
  styleUrls: ['./producteur-list.component.css'],
})
export class ProducteurListComponent implements OnInit {
  sortedProducteurs$: Observable<ProducteurInterface[]> = of([]); // Initialise sortedProducteurs$

  constructor(private dbService: DbServiceService, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.dbService.startFetch();
    this.sortedProducteurs$ = this.dbService.producteurEvent.pipe(
      switchMap(producteurs =>
        from(this.sortProducteursByLikes(producteurs))
      )
    );
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
}

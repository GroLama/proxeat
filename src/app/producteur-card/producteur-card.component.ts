import { Component, Input, OnInit } from '@angular/core';
import { ProducteurInterface } from '../interfaces/ProducteurInterface';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';


@Component({
  selector: 'app-producteur-card',
  templateUrl: './producteur-card.component.html',
  styleUrls: ['./producteur-card.component.css']
})
export class ProducteurCardComponent implements OnInit {

  @Input() producteur?: ProducteurInterface;
  liked: boolean = false;
  isMobileLayout: boolean = false;
  producteurs: ProducteurInterface[] = []; // Pour stocker les producteurs
  likesCount: { [key: string]: number } = {}; // Pour stocker le nombre de likes pour chaque producteur
  userid: string = '';

  constructor(private router: Router, private firestore: AngularFirestore, public afAuth: AngularFireAuth) { }

  

  getAllProducteurs(): void {
    this.firestore.collection('producteurs').get().subscribe(snapshot => {
      snapshot.docs.forEach(doc => {
        const producteur = doc.data() as ProducteurInterface; // Supposant que le document contient les champs du Producteur
        this.producteurs.push(producteur);
  
        if (producteur.id !== undefined) {
          const idStr = producteur.id.toString();
          if (this.producteur && this.producteur.id !== undefined) {
          this.countLikesForProducteur(this.producteur?.id);
          
          }
          
        }
        
      });
    });
  }

  
  
  countLikesForProducteur(producteurId: number): void {
    this.firestore.collection('like', ref => ref.where('producteurId', '==', producteurId)
    ).get().subscribe(snapshot => {
      // Stocker le nombre de likes pour ce producteurId
      this.likesCount[producteurId] = snapshot.size;
    });
  }
  toggleLike(): void {
    //this.liked = !this.liked;
    if (this.producteur && this.producteur.id !== undefined) {
      
      // Chercher dans la base de données pour un enregistrement existant
      this.firestore.collection('like', ref => ref
        .where('userId', '==', this.userid)
        .where('producteurId', '==', this.producteur?.id)
      ).get().subscribe(snapshot => {
        if (snapshot.empty) {
          // Si l'enregistrement n'existe pas, créer un nouvel enregistrement
          this.firestore.collection('like').add({
            userId: this.userid,
            producteurId: this.producteur?.id
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);

            if (this.producteur && this.producteur.id !== undefined) {
              // Convertir l'id en string avant de l'utiliser
              if (this.producteur && this.producteur.id !== undefined) {
                this.countLikesForProducteur(this.producteur.id);
              }
              
            }
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
        } else {
          // Si l'enregistrement existe, le supprimer
          snapshot.docs[0].ref.delete()
          .then(() => {
            console.log("Document successfully deleted!");
            if (this.producteur && this.producteur.id !== undefined) {
              // Convertir l'id en string avant de l'utiliser
              if (this.producteur && this.producteur.id !== undefined) {
                this.countLikesForProducteur(this.producteur.id);
              }
            }
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
        }
      });
    }
  }


get producteurLikesCount(): number {
  // Assurez-vous que producteur et producteur.id sont définis
  if (this.producteur && this.producteur.id !== undefined) {
    // Convertir l'id en string
    const idStr = this.producteur.id.toString();
    // Retourner la valeur de likesCount pour ce producteur, ou 0 si elle n'existe pas
    return this.likesCount[idStr] || 0;
  }
  // Retourner 0 si producteur ou producteur.id sont indéfinis
  return 0;
}
ngOnInit(): void {
    // Logique d'initialisation à exécuter ici
    this.afAuth.user.subscribe(user => {
        if (user) {
          this.userid = user.uid;
        };
      })
      
    this.getAllProducteurs();
    
    if (this.producteur && this.producteur.id !== undefined) {
      this.countLikesForProducteur(this.producteur?.id);
      
    }
  }
// ...
}

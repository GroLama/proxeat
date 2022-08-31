import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producteur-list',
  templateUrl: './producteur-list.component.html',
  styleUrls: ['./producteur-list.component.css'],
})
export class ProducteurListComponent implements OnInit {
  producteurList = [
    {
      description: 'Le meilleur boulanger',
      name: 'Garry',
      photoDevanture:
        'https://upload.wikimedia.org/wikipedia/commons/1/16/Devanture_Boulangerie_159_rue_Ordener.jpg',
      horaires: '9:00-18:00. Fermé mardi',
      localisationClear: '4 Rue du Moulin, Tarbes',
    },
    {
      description: 'Le meilleur boulanger',
      name: 'Roger',
      photoDevanture:
        'https://upload.wikimedia.org/wikipedia/commons/1/16/Devanture_Boulangerie_159_rue_Ordener.jpg',
      horaires: '9:00-18:00. Fermé mardi',
      localisationClear: '4 Rue du Moulin, Tarbes',
    },
    {
      description: 'Le meilleur boulanger',
      name: 'Sam',
      photoDevanture:
        'https://upload.wikimedia.org/wikipedia/commons/1/16/Devanture_Boulangerie_159_rue_Ordener.jpg',
      horaires: '9:00-18:00. Fermé mardi',
      localisationClear: '4 Rue du Moulin, Tarbes',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

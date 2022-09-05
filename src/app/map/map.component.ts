import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    title = 'google-maps';
  
    ngOnInit(): void {
      let loader = new Loader({
        apiKey: 'AIzaSyBFL91Di8FJ492DTBBqRqRxZPzkeaLvPEg'
      })
  
      loader.load().then(() => {
        console.log('loaded maps')
  
        const location = { lat: 43.231970, lng: 0.075235 }
  
        new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: {lat:43.231970,lng:0.075235},
          zoom: 13,
          // styles: proxeat-map
        })
  
        const marker = new google.maps.Marker({
          position: location,
        });
      })
    }
  }
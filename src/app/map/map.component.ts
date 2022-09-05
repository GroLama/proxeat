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

        var location = { lat: 43.231970, lng: 0.075235 }

        let myMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: {lat:43.231990,lng:0.075235},
          zoom: 12,
          // styles: proxeat-map
        })

        var marker = new google.maps.Marker({
          position : new google.maps.LatLng(location),
          icon: {
            url: './assets/custom_pin.svg',
            anchor: new google.maps.Point(35,35),
            scaledSize: new google.maps.Size(50, 50)
          },
          map : myMap
        });

      })
    }
  }

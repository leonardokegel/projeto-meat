import { RestaurantService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaruntsServices: RestaurantService) { }

  ngOnInit() {
    this.restaruntsServices.restaurants().subscribe(
      response => {
        this.restaurants = response;
      },
      error => {
        console.log(`Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`);
      }
    )
  }
}

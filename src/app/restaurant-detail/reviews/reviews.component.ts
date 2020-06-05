import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']).subscribe(
      response => {
        console.log(response);
        this.reviews = response;
      },
      error => {
        console.log(error);
      }
    )
    
  }

}

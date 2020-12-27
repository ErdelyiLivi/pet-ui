import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Spot} from '../spot.model';
import {SpotService} from '../spot.service';

@Component({
  selector: 'app-add-spot',
  templateUrl: './add-spot.component.html',
  styleUrls: ['./add-spot.component.css']
})
export class AddSpotComponent implements OnInit {

  spot: Spot = new Spot();
  submitted = false;

  constructor(private router: Router, private route: ActivatedRoute, private spotService: SpotService) {}

  ngOnInit() {
    const spotId = this.route.snapshot.paramMap.get('id');
    this.spotService.getSpotById(+spotId)
      .subscribe( data => {
        this.spot = data;
      });
  }

  createSpot(spot): void {
    this.submitted = true;
    this.spot.name = spot.name;
    this.spotService.createSpot(this.spot)
      .subscribe(data => {
        // alert('Spot created successfully.');
        // TODO message saved successfully
        this.router.navigate(['/spots']);
      });
  }

  // TODO fix warnings here
  backButtonClick = function () {
    this.router.navigate(['/spots']);
  };


}

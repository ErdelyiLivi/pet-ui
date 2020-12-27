import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Spot } from '../spot.model';
import { SpotService } from '../spot.service';
// import { SPOTS } from '../mock-spots';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.css']
})
export class SpotComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'country', 'continent', 'visited','notes', 'action'];

  spots: Spot[];

  constructor(private router: Router, private spotService: SpotService) { }

  ngOnInit() {
    this.spotService.getSpots()
      .subscribe( data => {
        this.spots = data;
      });
    // this.spots = SPOTS;
  }

  editSpot(id) {
    this.router.navigate(['/edit/', id]);
  }

}

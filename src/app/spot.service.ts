import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Spot} from './spot.model';
import {ImageSource} from './imagesource.model';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor(private http: HttpClient) {
  }

  public getSpots() {
    return this.http.get<Spot[]>(environment.apiUrl + '/getAllSpots');
  }

  public createSpot(spot) {
    return this.http.post<Spot>(environment.apiUrl + '/saveSpot', spot);
  }

  public getSpotById(id: number) {
    return this.http.get<Spot>(environment.apiUrl + '/getSpot/' + id);
  }

  // TODO make its own service
  public getImagesBySpotId(spotId: string) {
    return this.http.get<ImageSource[]>(environment.apiUrl + '/getImages/' + spotId);
  }
}

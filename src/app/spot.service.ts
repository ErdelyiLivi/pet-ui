import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Spot} from './spot.model';
import {ImageSource} from './imagesource.model';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor(private http: HttpClient) {
  }

  public getSpots() {
    return this.http.get<Spot[]>('http://localhost:8080/getAllSpots');
  }

  public createSpot(spot) {
    return this.http.post<Spot>('http://localhost:8080/saveSpot', spot);
  }

  public getSpotById(id: number) {
    return this.http.get<Spot>('http://localhost:8080/getSpot/' + id);
  }

  // TODO make its own service
  public getImagesBySpotId(spotId: string) {
    return this.http.get<ImageSource[]>('http://localhost:8080/getImages/' + spotId);
  }
}

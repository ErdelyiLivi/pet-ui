import {TestBed} from '@angular/core/testing';

import {SpotService} from './spot.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SpotService', () => {
  let service: SpotService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpotService],
    });

    // inject the service
    service = TestBed.get(SpotService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get the data successful', () => {
    service.getSpotById(1).subscribe((data: any) => {
      expect(data.name).toBe('EiffelTower');
    });
  });

  it('should get the correct name', () => {
    service.getSpotById(1).subscribe((data: any) => {
      expect(data.name).toBe('EiffelTower');
    });

    const req = httpMock.expectOne(`http://localhost:8080/getSpot/1`, 'call to api');
    expect(req.request.method).toBe('GET');
  });

});

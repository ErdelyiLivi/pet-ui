import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {SpotService} from '../spot.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-imageviewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  //galleryOptions: NgxGalleryOptions[];
  //galleryImages: NgxGalleryImage[] = [];
  spotId: string;

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  uploader: FileUploader;

  constructor(private spotService: SpotService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.spotId = this.route.snapshot.paramMap.get('id');
    const headers = [{name: 'Accept', value: 'application/json'}];
    // TODO improve upload handling allow and implement delete
    this.uploader = new FileUploader({url: 'http://localhost:8080/api/files/' + this.spotId, autoUpload: true, headers: headers});

    this.uploader.onCompleteAll = () => {
      // TODO find nicer solution for refresh
      this.router.navigateByUrl('/').then(() =>
        this.router.navigate(['/imageviewer/', this.spotId]));
    };

    /*this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];*/

    this.spotService.getImagesBySpotId(this.spotId).subscribe(data => {
      /*data.forEach(image => this.galleryImages.push({
        small: image.url,
        medium: image.url,
        big: image.url
      }));*/

    });
  }
}

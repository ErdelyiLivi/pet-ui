import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageViewerComponent } from './image-viewer.component';
import {FileUploadModule} from "ng2-file-upload";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {SpotComponent} from "../spot/spot.component";
import {AddSpotComponent} from "../add-spot/add-spot.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
// TODO enable this
xdescribe('ImageViewerComponent', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewerComponent, SpotComponent, AddSpotComponent ],
      imports: [FileUploadModule, HttpClientModule, AppRoutingModule, MatIconModule, MatCheckboxModule, MatTableModule, FormsModule, MatFormFieldModule, MatSelectModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

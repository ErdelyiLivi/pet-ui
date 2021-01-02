import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddSpotComponent} from './add-spot.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//TODO improve tests
describe('AddSpotComponent', () => {
  let component: AddSpotComponent;
  let fixture: ComponentFixture<AddSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddSpotComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpotComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

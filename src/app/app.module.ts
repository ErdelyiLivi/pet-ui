import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SpotComponent } from './spot/spot.component';
import { AddSpotComponent } from './add-spot/add-spot.component';
import { AppRoutingModule } from './app-routing.module';
import {SpotService} from './spot.service';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageViewerComponent } from './imageviewer/image-viewer.component';
import {FileUploadModule} from 'ng2-file-upload';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    SpotComponent,
    AddSpotComponent,
    ImageViewerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,
        ReactiveFormsModule,
        FileUploadModule,
        MatCheckboxModule
    ],
  providers: [SpotService],
  bootstrap: [AppComponent]
})
export class AppModule { }

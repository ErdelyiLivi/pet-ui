import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpotComponent } from './spot/spot.component';
import {AddSpotComponent} from './add-spot/add-spot.component';
import {ImageViewerComponent} from './imageviewer/image-viewer.component';


const routes: Routes = [
  { path: 'spots', component: SpotComponent },
  { path: 'edit/:id', component: AddSpotComponent },
  { path: 'imageviewer/:id', component: ImageViewerComponent }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // CommonModule,
RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

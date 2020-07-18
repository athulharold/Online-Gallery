//Routing Module to route to the image gallery page for all /gallery and undefined routes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery.component';
const routes: Routes = [
	{ path: 'gallery', component: ImageGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageGalleryRoutingModule { }

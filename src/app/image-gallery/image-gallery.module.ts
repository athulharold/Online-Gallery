import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ImageGalleryRoutingModule } from './image-gallery.-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ImageGalleryComponent} from './image-gallery.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ImageGalleryComponent],
  imports: [
    CommonModule,
    ImageGalleryRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ImageGalleryModule { }

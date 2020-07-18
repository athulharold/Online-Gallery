import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Iimage } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  images: Iimage[];  //image array to recieve the details of stored images
  clickedit=false;   //flag varible to see if an image is selected
  clickedImage:Iimage; //Variable to store the image to be displayed when selected
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  	this.dataService.getImages().subscribe((image:Iimage[])=>this.images=image);
  	console.log(this.images);
  }

  clicked(image:Iimage){
      this.clickedit=true;
      this.clickedImage=image;
  }
  closeClick(){
    this.clickedit=false;

  }

}


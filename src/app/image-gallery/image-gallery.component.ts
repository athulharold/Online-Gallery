import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Iimage } from '../shared/interfaces';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  images: Iimage[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  	this.dataService.getImages().subscribe((image:Iimage[])=>this.images=image);
  	console.log(this.images);
  }

}

//DETAILS ABOUT THE IMAGE IS NOT LOADING
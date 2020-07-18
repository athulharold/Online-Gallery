import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';



@NgModule({
  declarations: [UploadComponent,
  				 HeaderComponent],
  imports: [
    CommonModule,
    UploadRoutingModule

  ]
})
export class UploadModule { }

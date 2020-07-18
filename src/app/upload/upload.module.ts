import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';

@NgModule({
  declarations: [UploadComponent,
  				 ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    HttpClientModule

  ]
})
export class UploadModule { }
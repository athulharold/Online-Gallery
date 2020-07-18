import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ImageGalleryRoutingModule } from './image-gallery.-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ImageGalleryComponent} from './image-gallery.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';



// import {CustomersComponent} from '../customers/customers.component';
// import {CustomerListComponent} from '../customer-list/customer-list.component';
@NgModule({
  declarations: [ImageGalleryComponent],
  imports: [
    CommonModule,
    ImageGalleryRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule

  ]
})
export class ImageGalleryModule { }

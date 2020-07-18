// This is the service that fetches the data from the api and 
// serves to the ImageGalleryComponent

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Iimage } from '../../app/shared/interfaces';
@Injectable()
export class DataService {

    baseUrl: string = 'http://localhost:5000/api/images';
    
    constructor(private http: HttpClient) { }
     getImages() : Observable<Iimage[]> {
        return this.http.get<Iimage[]>(this.baseUrl)
            .pipe(
                catchError(this.handleError)
            );
    }
      private handleError(error: any) {
         console.error('server error:', error);
         if (error.error instanceof Error) {
            const errMessage = error.error.message;
             return Observable.throw(errMessage);
         }
         return throwError(error || 'Node.js server error');
       }

 }
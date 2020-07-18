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
    
//     getCompleteImage(id: number) : Observable<ICustomer> {
//       return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
//         .pipe(
//           map(customers => {
//             let customer = customers.filter((cust: ICustomer) => cust.id === id);
//             return (customer && customer.length) ? customer[0] : null;
//           }),
//           catchError(this.handleError)
//         );
//     }

//     getOrders(id: number) : Observable<IOrder[]> {
//       return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
//         .pipe(
//           map(orders => {
//             let custOrders = orders.filter((order: IOrder) => order.customerId === id);
//             return custOrders;
//           }),
//           catchError(this.handleError)
//         );
//     }



    private handleError(error: any) {
       console.error('server error:', error);
       if (error.error instanceof Error) {
          const errMessage = error.error.message;
           return Observable.throw(errMessage);
       }
       return throwError(error || 'Node.js server error');
     }

 }
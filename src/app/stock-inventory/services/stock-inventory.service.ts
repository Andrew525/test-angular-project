import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item, Product } from '../models/product.inteface';


@Injectable()
export class StockInventoryService {

    readonly HOST = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getCardItems(): Observable<Item[]> {
       return this.http.get(this.HOST + '/api/cards')
           .pipe(map((response: Item[]) => response));
    }

    getProductItems(): Observable<Product[]> {
        return this.http.get(this.HOST + '/api/products')
            .pipe(map((response: Product[]) => response));
    }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Item, Product } from '../models/product.inteface';
import { StockInventoryService } from '../services/stock-inventory.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-stock-inventory',
    styleUrls: ['./stock-inventory.component.scss'],
    template: `
        <div class="stock-inventory">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <app-stock-branch [parent]="form">
                </app-stock-branch>

                <app-stock-selector
                        [parent]="form"
                        [products]="products"
                        (added)="addStock($event)">
                </app-stock-selector>

                <app-stock-products [parent]="form"
                                    (removed)="removeStock($event)"
                                    [map]="productMap">
                </app-stock-products>

                <div class="stock-inventory__buttons">
                    <button type="submit" [disabled]="form.invalid">
                        Order stock
                    </button>
                </div>

                <pre>{{ form.value | json }}</pre>
            </form>
        </div>
    `
})
export class StockInventoryComponent implements  OnInit {
    products: Product[];
    productMap: Map<number, Product>;

    form = this.fb.group({
        store: this.fb.group({
            branch: '',
            code: ''
        }),
        selector: this.createStock({}),
        stock: this.fb.array([])
    });

    constructor(private fb: FormBuilder, private stockService: StockInventoryService) {}

    ngOnInit(): void {
        const cardItems = this.stockService.getCardItems();
        const productItems = this.stockService.getProductItems();
        forkJoin(cardItems, productItems)
            .subscribe(([cards, products]: [Item[], Product[]]) => {
                console.log(products, cards);
                const myMap = products
                    .map<[number, Product]>(product => [product.id, product]);
                this.productMap = new Map<number, Product>(myMap);
                this.products = products;
                cards.forEach(item => this.addStock(item));

                this.form.get('stock').valueChanges.subscribe(value => {
                    console.log(value);
                });
        });
    }

    createStock(stock) {
        return this.fb.group({
            product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
            quantity: new FormControl(stock.quantity || 10)
        });
    }

    addStock(stock) {
        const control = this.form.get('stock') as FormArray;
        control.push(this.createStock(stock));
    }

    removeStock({group, index}: { group: FormGroup, index: number }) {
        const control = this.form.get('stock') as FormArray;
        control.removeAt(index);
    }

    onSubmit() {
        console.log('Submit', this.form.value);
    }
}

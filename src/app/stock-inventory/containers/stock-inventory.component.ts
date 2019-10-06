import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Product} from '../models/product.inteface';

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
                                    (removed)="removeStock($event)">
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
export class StockInventoryComponent {
    products: Product[] = [
        {id: 1, price: 2800, name: 'MacBook Pro'},
        {id: 2, price: 50, name: 'USB-C Adaptor'},
        {id: 3, price: 400, name: 'iPod'},
        {id: 4, price: 900, name: 'iPhone'},
        {id: 5, price: 600, name: 'Apple Watch'}
    ];

    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl('B123'),
            code: new FormControl('122341')
        }),
        selector: this.createStock({}),
        stock: new FormArray([
            this.createStock({product_id: 1, quantity: 20}),
            this.createStock({product_id: 3, quantity: 50})
        ])
    });

    createStock(stock) {
        return new FormGroup({
            product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
            quantity: new FormControl(stock.quantity || 10)
        });
    }

    addStock(stock) {
        const control = this.form.get('stock') as FormArray;
        control.push(this.createStock(stock));
    }

    onSubmit() {
        console.log('Submit', this.form.value);
    }

    removeStock({group, index}: { group: FormGroup, index: number }) {
        const control = this.form.get('stock') as FormArray;
        control.removeAt(index);
    }
}

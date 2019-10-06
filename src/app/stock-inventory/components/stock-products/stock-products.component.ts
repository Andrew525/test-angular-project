import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import { Product } from '../../models/product.inteface';

@Component({
    selector: 'app-stock-products',
    template: `
        <div class="stock-product" [formGroup]="parent">
            <div formArrayName="stock">
                <div *ngFor="let item of stocks; let i = index;">
                    <div class="stock-product__content" [formGroupName]="i">
                        <div class="stock-product__name">
                            {{ getProduct(item.value.product_id).name }}
                        </div>
                        <div class="stock-product__price">
                            {{ getProduct(item.value.product_id).price | currency:'USD':"symbol-narrow" }}
                        </div>
                        <input type="number"
                               step="10"
                               min="10"
                               max="1000"
                               formControlName="quantity">
                        <button type="button" (click)="onRemove(item, i)">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

    @Input()
    parent: FormGroup;

    @Input()
    map: Map<number, Product>;

    @Output()
    removed = new EventEmitter<any>();

    get stocks() {
        return (this.parent.get('stock') as FormArray).controls;
    }

    constructor() {
    }

    ngOnInit() {
    }
    getProduct(id) {
        return this.map.get(id);
    }

    onRemove(item, index) {
        this.removed.emit({item, i: index});
    }
}

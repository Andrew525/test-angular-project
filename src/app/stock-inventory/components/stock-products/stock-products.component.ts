import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-stock-products',
    template: `
        <div class="stock-product" [formGroup]="parent">
            <div formArrayName="stock">
                <div *ngFor="let item of stocks; let i = index;">
                    <div class="stock-product__content" [formGroupName]="i">
                        <div class="stock-product__name">
                            {{ item.value.product_id}}
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

    @Output()
    removed = new EventEmitter<any>();

    get stocks() {
        return (this.parent.get('stock') as FormArray).controls;
    }

    constructor() {
    }

    ngOnInit() {
    }

    onRemove(item, index) {
        this.removed.emit({item, i: index});
    }
}

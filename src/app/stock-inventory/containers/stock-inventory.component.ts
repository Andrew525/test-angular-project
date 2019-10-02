import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-stock-inventory',
    styleUrls: [ './stock-inventory.component.scss' ],
    template: `
        <div class="stock-inventory">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <app-stock-branch [paren]="form">
                </app-stock-branch>

                <app-stock-selector [paren]="form">
                </app-stock-selector>

                <app-stock-products [paren]="form">
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
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl('B123'),
            code: new FormControl('122341')
        }),
        selector: new FormGroup( {
            product_id: new FormControl(''),
            quality: new FormControl(10)
        }),
        stock: new FormArray([])
    });


    onSubmit() {
        console.log('Submit', this.form.value);
    }
}

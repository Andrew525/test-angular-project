import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-stock-selector',
    template: `
      <div class="stock-selector" [formGroup]="parent">

      </div>
    `,
    styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

    @Input()
    parent: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

}

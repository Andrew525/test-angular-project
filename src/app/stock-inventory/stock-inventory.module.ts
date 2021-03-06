import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StockInventoryComponent } from './containers/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockInventoryService } from './services/stock-inventory.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        StockInventoryComponent
    ],
    providers: [
        StockInventoryService
    ]
})
export class StockInventoryModule {}

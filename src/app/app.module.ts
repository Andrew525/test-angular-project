import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { MyForDirective } from './for/my-for.directive';
import { FileSizeModule } from './filesize/fileSize.module';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        CreditCardDirective,
        TooltipDirective,
        MyForDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FileSizeModule,
        StockInventoryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

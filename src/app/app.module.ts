import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        CreditCardDirective,
        FormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StockInventoryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

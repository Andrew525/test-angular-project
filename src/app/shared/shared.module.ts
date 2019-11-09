import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyForDirective } from './for/my-for.directive';
import { FileSizeModule } from './filesize/fileSize.module';
import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
    declarations: [
        MyForDirective,
        TooltipDirective
    ],
    imports: [
        BrowserModule,
        FileSizeModule
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule {
}

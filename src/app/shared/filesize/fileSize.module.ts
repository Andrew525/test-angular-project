import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSizePipe } from './fileSize.pipe';
import { AppComponent } from '../../app.component';

@NgModule({
    declarations: [
        FileSizePipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        FileSizePipe
    ],
    bootstrap: [AppComponent]
})
export class FileSizeModule { }

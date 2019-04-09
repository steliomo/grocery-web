import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMessageComponent } from './input-message.component';

@NgModule({
    declarations: [ InputMessageComponent ],

    exports: [ InputMessageComponent ],

    imports: [
        CommonModule
    ]
})
export class InputMessageModule{

}
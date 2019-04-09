import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'go-input-message',
    templateUrl: './input-message.component.html'
})
export class InputMessageComponent implements OnInit{
    
    ngOnInit(): void {
    }

    @Input() message: string;

}
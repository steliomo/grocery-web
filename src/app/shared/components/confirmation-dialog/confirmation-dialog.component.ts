import { Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { Dialog } from './dialog';

@Component({
  selector: 'go-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit, OnDestroy {
  
  @Input() dialogId: string;
  
  @ContentChild('closeModal', {static: false}) modal: ElementRef;
  
  @Output() dialogEvent = new EventEmitter();

  dialog: Dialog = new Dialog("", {});
  
  constructor(private confirmationDialogService: ConfirmationDialogService) { }
  
  ngOnInit() {
    this.confirmationDialogService
        .getDialog()
        .subscribe(dialog => this.dialog = dialog)
  }
  
  yesBtn(){
    this.dialogEvent.emit(this.dialog.value);
    this.modal.nativeElement.click();
  }
  
  ngOnDestroy(): void {
    this.dialogEvent.unsubscribe();
  }

}

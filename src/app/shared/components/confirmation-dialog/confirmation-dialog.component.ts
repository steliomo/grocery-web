import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Dialog } from './dialog';
import { ConfirmationDialogService } from './confirmation-dialog.service';

@Component({
  selector: 'go-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit, OnDestroy {
  
  @Input() dialogId: string;
  
  @ViewChild('closeModal') modal: ElementRef;
  
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

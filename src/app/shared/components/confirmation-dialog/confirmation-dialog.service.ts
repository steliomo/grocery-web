import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dialog } from './dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  dialogSubject: Subject<Dialog>  = new Subject<Dialog>();

  constructor() { }

  setDialog(message:string, value:Object){
    this.dialogSubject.next(new Dialog(message, value));
  }

  getDialog(){
    return this.dialogSubject.asObservable();
  }
}

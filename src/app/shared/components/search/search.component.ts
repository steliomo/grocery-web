import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'go-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  
  @Input() items:Object[] =[];
  
  @Input()selectedItem: Object;

  @Output() searchEvent = new EventEmitter();

  @Output() selectionEvent = new EventEmitter();
  
  query: Subject<string> = new Subject<string>();
  
  constructor() { }
  
  ngOnInit() {
    
    if(!this.selectedItem){
      this.selectedItem = { name: "Seleccione..." };
    }

    this.query
        .pipe(debounceTime(300))
        .subscribe(value => {
          value = value.trim().toLowerCase();
          this.searchEvent.emit(value);
        });
  }
  
  onSelect(item: Object){
    this.selectedItem = item;
    this.selectionEvent.emit(item);
  }
  
  ngOnDestroy(): void {
    this.query.unsubscribe();
    this.searchEvent.unsubscribe();
    this.selectionEvent.unsubscribe();
  }

}

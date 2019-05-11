import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'go-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<string>

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
   this.loading$ = this.loadingService
                       .getLoadingType()
                       .pipe(map(loadingType => loadingType.valueOf()));
  }
}

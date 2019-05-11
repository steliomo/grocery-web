import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private loadingSubject: Subject<LoadingType>

    constructor(){
        this.loadingSubject = new Subject();
    }

    getLoadingType(){
        return this.loadingSubject
                    .asObservable()
                    .pipe(startWith(LoadingType.STOPPED));
    }

    start(){
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop(){
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private loadingSubject: Subject<LoadingType>

    constructor(){
        this.loadingSubject = new BehaviorSubject(LoadingType.STOPPED);
    }

    getLoadingType(){
        return this.loadingSubject;
    }

    start(){
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop(){
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}
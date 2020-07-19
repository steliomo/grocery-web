import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
    providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
                   .pipe(
                        tap(event => {
                            if(event instanceof HttpResponse){
                                this.loadingService.stop();
                            }else{
                                this.loadingService.start()
                            }
                        }),
                        catchError(error => {
                            this.loadingService.stop();
                            throw error;
                        }))
    }

}
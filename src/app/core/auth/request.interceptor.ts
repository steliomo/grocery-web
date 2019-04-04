import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token:string = 'Basic '+ btoa('822546100:111111');

        req = req.clone({
            setHeaders:{
                Authorization: token
            }
        })

        return next.handle(req);
    }

}
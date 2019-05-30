import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenServie } from './token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenServie){}
    
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(!this.tokenService.getToken()){
            return next.handle(req);
        }

        req = req.clone({
            setHeaders:{
                Authorization: this.tokenService.getToken()
            }
        })
        
        return next.handle(req);
    }

}
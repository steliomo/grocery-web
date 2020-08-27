import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { TokenServie } from './token.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { ErrorApi } from './error-api';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenServie, private alertService: AlertService, private router: Router, private loadingService: LoadingService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!this.tokenService.getToken()) {
            return next.handle(req).pipe(catchError(this.errorHandler()));
        }

        req = req.clone({
            setHeaders: {
                Authorization: this.tokenService.getToken()
            }
        })

        return next.handle(req).pipe(catchError(this.errorHandler()));
    }

    errorHandler() {
        return (error => {

            if (error instanceof HttpErrorResponse) {
                switch (error.status) {
                    case 400:
                        return throwError(error.error as ErrorApi);
                    case 404:
                        this.router.navigate(['not-found']);
                        this.loadingService.stop();
                        break;
                    case 504:
                        this.alertService.danger('Ocorreu um erro ao comunicar com servidor... Por favor verifique a sua conexão ou contacte o administrador do sistema!');
                        break;
                    case 500:
                        this.alertService.danger('Ocorreu um erro no servidor... Por favor contacte o administrador do sistema!');
                        break;
                }
            }

            console.log(error);
            return throwError(error.message);
        })
    }
}
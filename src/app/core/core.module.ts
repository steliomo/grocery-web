import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { RequestInterceptor } from './auth/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingModule } from '../shared/components/loading/loading.module';

@NgModule({
    declarations : [
        HeaderComponent,
        MainMenuComponent
    ],

    exports : [
        HeaderComponent,
        MainMenuComponent
    ],

    imports : [
        CommonModule,
        RouterModule, 
        LoadingModule
    ],
    
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule{}
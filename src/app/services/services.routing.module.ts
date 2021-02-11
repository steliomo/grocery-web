import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { ServiceFormComponent } from "./service/service-form/service-form.component";
import { ServiceListComponent } from "./service/service-list/service-list.component";
import { ServiceResolver } from "./service/service.resolver";
import { ServicesComponent } from "./services.component";

const routes: Routes = [{
    path: '',
    component: ServicesComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: '',
            component: ServiceFormComponent
        },
        {
            path: 'service-create',
            component: ServiceFormComponent
        },
        {
            path: 'service-edit/:serviceUuid',
            component: ServiceFormComponent
        },
        {
            path: 'service-list',
            component: ServiceListComponent,
            resolve: {
                servicesDTO: ServiceResolver
            }
        }
    ]
}]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }
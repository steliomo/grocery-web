import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../core/auth/admin.guard";
import { AuthGuard } from "../core/auth/auth.guard";
import { ServiceDescriptionFormComponent } from "./service-description/service-description-form/service-description-form.component";
import { ServiceDescriptionListComponent } from "./service-description/service-description-list/service-description-list.component";
import { ServiceDescriptionValueResolver } from "./service-description/service-description-value.resolver";
import { ServiceDescriptionResolver } from "./service-description/service-description.resolver";
import { ServiceFormComponent } from "./service/service-form/service-form.component";
import { ServiceListComponent } from "./service/service-list/service-list.component";
import { ServiceResolver } from "./service/service.resolver";
import { ServicesComponent } from "./services.component";

const routes: Routes = [{

    path: '',
    component: ServicesComponent,
    canActivate: [AuthGuard, AdminGuard],

    children: [
        {
            path: '',
            component: ServiceDescriptionListComponent,
            resolve: {
                serviceDescriptionsDTO: ServiceDescriptionResolver
            }
        },
        {
            path: 'service-description-create',
            component: ServiceDescriptionFormComponent,
            resolve: {
                servicesDTO: ServiceResolver
            }
        },
        {
            path: 'service-description-edit/:serviceDescriptionUuid',
            component: ServiceDescriptionFormComponent,
            resolve: {
                servicesDTO: ServiceResolver,
                serviceDescriptionDTO: ServiceDescriptionValueResolver
            }
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
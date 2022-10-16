import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../core/auth/admin.guard";
import { AuthGuard } from "../core/auth/auth.guard";
import { GroceryResolver } from "../groceries/grocery.resolver";
import { ProductDescriptionResolver } from "../products/product-description/product-description.resolver";
import { ServiceDescriptionResolver } from "../services/service-description/service-description.resolver";
import { ServiceItemFormComponent } from "./service-item/service-item-form/service-item-form.component";
import { ServiceItemListComponent } from "./service-item/service-item-list/service-item-list.component";
import { ServiceItemValueResolver } from "./service-item/service-item-value.resolver";
import { ServiceItemResolver } from "./service-item/service-item.resolver";
import { ServiceItemsComponent } from "./service-items.component";

const routes: Routes = [
    {
        path: '',
        component: ServiceItemsComponent,
        canActivate: [AuthGuard, AdminGuard],

        children: [
            {
                path: '',
                component: ServiceItemListComponent,
                resolve: {
                    serviceItemsDTO: ServiceItemResolver
                },
            },
            {
                path: 'service-item-create',
                component: ServiceItemFormComponent,
                resolve: {
                    groceriesDTO: GroceryResolver,
                    serviceDescriptionsDTO: ServiceDescriptionResolver,
                }
            },
            {
                path: 'service-item-edit/:serviceItemUuid',
                component: ServiceItemFormComponent,
                resolve: {
                    groceriesDTO: GroceryResolver,
                    serviceDescriptionsDTO: ServiceDescriptionResolver,
                    serviceItemDTO: ServiceItemValueResolver
                }
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceItemsRoutingModule { }
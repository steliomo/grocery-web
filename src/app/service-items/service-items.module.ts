import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { AlertModule } from "../shared/components/alert/alert.module";
import { SearchModule } from "../shared/components/search/search.module";
import { ServiceItemModule } from "./service-item/service-item.module";
import { ServiceItemsComponent } from "./service-items.component";
import { ServiceItemsRoutingModule } from "./service-items.routing.module";

@NgModule({
    declarations: [ServiceItemsComponent],
    imports: [
        CoreModule,
        AlertModule,
        SearchModule,
        ServiceItemModule,
        ServiceItemsRoutingModule
    ]
})
export class ServiceItemsModule { }
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { SearchModule } from '../shared/components/search/search.module';
import { ServiceDescriptionModule } from './service-description/service-description.module';
import { ServiceModule } from './service/service.module';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CoreModule,
    AlertModule,
    ServiceModule,
    ServiceDescriptionModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }

import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { SearchModule } from '../shared/components/search/search.module';
import { ServiceModule } from './service/service.module';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CoreModule,
    AlertModule,
    SearchModule,
    ServiceModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }

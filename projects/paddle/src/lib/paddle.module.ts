import { ModuleWithProviders, NgModule } from '@angular/core';
import { PaddleDirective } from './paddle.directive';
import { PaddleService } from './paddle.service';
import { GLOBAL_CONFIGURATION_SERVICE, GlobalConfiguration } from './global.config';

@NgModule({
  declarations: [PaddleDirective],
  imports: [],
  providers: [PaddleService],
  exports: [PaddleDirective],
})
export class PaddleModule {
  static forRoot(config: GlobalConfiguration): ModuleWithProviders<PaddleModule> {
    return {
      ngModule: PaddleModule,
      providers: [{ provide: GLOBAL_CONFIGURATION_SERVICE, useValue: config }],
    };
  }
}

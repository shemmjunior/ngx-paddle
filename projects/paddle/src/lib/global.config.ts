
import { InjectionToken } from '@angular/core';
export interface GlobalConfiguration {
  sandbox: boolean;
}
export const GLOBAL_CONFIGURATION_SERVICE = new InjectionToken<GlobalConfiguration>('GlobalConfiguration');

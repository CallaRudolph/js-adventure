import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { InfoComponent  } from './info/info.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: InfoComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

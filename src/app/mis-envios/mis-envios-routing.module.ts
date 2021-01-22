import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEnviosPage } from './mis-envios.page';

const routes: Routes = [
  {
    path: '',
    component: MisEnviosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEnviosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEnviosPageRoutingModule } from './mis-envios-routing.module';

import { MisEnviosPage } from './mis-envios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEnviosPageRoutingModule
  ],
  declarations: [MisEnviosPage]
})
export class MisEnviosPageModule {}

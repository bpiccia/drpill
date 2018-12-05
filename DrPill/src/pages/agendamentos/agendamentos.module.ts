import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendamentosPage } from './agendamentos';

@NgModule({
  declarations: [
    AgendamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendamentosPage),
  ],
  exports: [
    AgendamentosPage
  ]
})
export class AgendamentosPageModule {}

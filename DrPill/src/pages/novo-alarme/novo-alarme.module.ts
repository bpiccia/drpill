import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoAlarmePage } from './novo-alarme';

@NgModule({
  declarations: [
    NovoAlarmePage,
  ],
  imports: [
    IonicPageModule.forChild(NovoAlarmePage),
  ],
  exports: [
    NovoAlarmePage
  ]
})
export class NovoAlarmePageModule {}

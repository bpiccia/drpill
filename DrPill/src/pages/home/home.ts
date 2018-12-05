import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmesPage } from '../alarmes/alarmes';
import { AgendamentosPage } from '../agendamentos/agendamentos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = AlarmesPage.name;
  tab2Root = AgendamentosPage.name;

  public alarmes = [];

  constructor(public navCtrl: NavController) {

  }

}

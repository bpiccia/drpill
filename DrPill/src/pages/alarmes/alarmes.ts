import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alarme } from '../../modelos/alarme';
import { NovoAlarmePage } from '../novo-alarme/novo-alarme';

/**
 * Generated class for the AlarmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alarmes',
  templateUrl: 'alarmes.html',
})
export class AlarmesPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //get alarmes cadastrados
  }

  novoAlarme(){
    this.navCtrl.push(NovoAlarmePage.name);
  }

  pegaAlarmes(){

  }

}

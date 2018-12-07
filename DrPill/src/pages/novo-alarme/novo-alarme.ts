import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the NovoAlarmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-alarme',
  templateUrl: 'novo-alarme.html',
})
export class NovoAlarmePage {

  public nome : String;
  public duracao : number;
  public intervalo : number;
  public quantidade : number;
  public dataInicial: string = new Date().toISOString();

  private _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  adicionarAlarme(){
    //salva o registro no storage

    this.navCtrl.pop();
  }


  

}

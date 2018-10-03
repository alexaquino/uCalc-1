import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TrintahorasPage } from '../trintahoras/trintahoras';
// Proveider: Armazena e disponibiliza média para todas as pages.
import { Media } from '../../providers/media';

@Component({
  selector: 'page-reprovado',
  templateUrl: 'reprovado.html'
})

export class ReprovadoPage {

  constructor(public navCtrl: NavController, public resultado_final: Media){ }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

  goToTrintahoras(params){
    if (!params) params = {};
    this.navCtrl.push(TrintahorasPage);
  }

  goBack(){
    this.navCtrl.pop();
  }

}

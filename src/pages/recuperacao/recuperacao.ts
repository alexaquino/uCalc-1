import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TrintahorasPage } from '../trintahoras/trintahoras';
import { Media } from '../../providers/media'; // Proveider: Armazena e disponibiliza média para todas as pages.

@Component({
  selector: 'page-recuperacao',
  templateUrl: 'recuperacao.html'
})

export class RecuperacaoPage {

  constructor(public navCtrl: NavController, public resultado_final: Media){ }

  get notaRecuperacao() {
    // nota de recuperação = (12 - Média)
    const recuperacao = ((12 - this.resultado_final.resultado).toFixed(1));
    return recuperacao;
  }

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

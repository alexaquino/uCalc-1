import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReprovadoPage } from '../reprovado/reprovado';
import { RecuperacaoPage } from '../recuperacao/recuperacao';
import { AprovadoPage } from '../aprovado/aprovado';
import { HomePage } from '../home/home';
import { AjudaPage } from '../ajuda/ajuda';
import { Media } from '../../providers/media'; // Proveider: Armazena e disponibiliza média para todas as pages.

@Component({
  selector: 'page-trintahoras',
  templateUrl: 'trintahoras.html'
})

export class TrintahorasPage {

  constructor(public navCtrl: NavController, public resultado_final: Media){ }

  unidade_1 = '';
  unidade_2 = '';

  get score() {
    // score = (u1 x 4 + u2 x 5)
    var score = eval("((this.unidade_1 * 4) + (this.unidade_2 * 5))");
    score = score.toFixed(1);
    return score;
  }

  get unidade2() {
    //3ª Unidade = ((62.6 - score) / 5)
    var unidade2 = ((62.6 - this.score) / 5).toFixed(2);
    return unidade2;
  }

  get resultadoFinal() {
    // média = ((u1 x 4 + u2 x 5) / 9)
    const media_parcial = eval("((this.unidade_1 * 4) + (this.unidade_2 * 5)) / 9");
    const media_final = media_parcial.toFixed(1);

    if (media_final >= 7)
      return 'aprovado';
    else if (media_final < 7 && media_final >= 4)
      return 'recuperacao';
    else
      return 'reprovado';
  }

  get mediaFinal() {
    // média = ((u1 x 4 + u2 x 5) / 9)
    const media = (eval("((this.unidade_1 * 4) + (this.unidade_2 * 5)) / 9")).toFixed(1);
    return media;
  }

  goToAprovado(params){
    // Atualizando valor resultado/média(provider)
    this.resultado_final.setResultado(this.mediaFinal);
    if (!params) params = {};
    this.navCtrl.push(AprovadoPage);
  }

  goToReprovado(params){
    // Atualizando valor resultado/média(provider)
    this.resultado_final.setResultado(this.mediaFinal);
    if (!params) params = {};
    this.navCtrl.push(ReprovadoPage);
  }

  goToRecuperacao(params){
    // Atualizando valor resultado/média(provider)
    this.resultado_final.setResultado(this.mediaFinal);
    if (!params) params = {};
    this.navCtrl.push(RecuperacaoPage);
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

  goToAjuda(params){
    if (!params) params = {};
    this.navCtrl.push(AjudaPage);
  }
}

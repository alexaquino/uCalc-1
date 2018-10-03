import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReprovadoPage } from '../reprovado/reprovado';
import { RecuperacaoPage } from '../recuperacao/recuperacao';
import { AprovadoPage } from '../aprovado/aprovado';
import { AjudaPage } from '../ajuda/ajuda';
import { TrintahorasPage } from '../trintahoras/trintahoras';
import { LoginPage } from '../login/login';

// Proveider: Armazena e disponibiliza média para todas as pages.
import { Media } from '../../providers/media';

import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public resultado_final: Media, private authService: AuthService){ }

  unidade_1 = '';
  unidade_2 = '';
  unidade_3 = '';

  get score() {
    // score = (u1 x 4 + u2 x 5 + u3 x 6)
    var score = eval("((this.unidade_1 * 4) + (this.unidade_2 * 5) + (this.unidade_3 * 6))");
    score = score.toFixed(1);
    return score;
  }

  get unidade3() {
    //3ª Unidade = ((104.3 - score) / 6)
    var unidade3 = ((104.3 - this.score) / 6).toFixed(2);
    return unidade3;
  }

  get resultadoFinal() {
    // média = ((u1 x 4 + u2 x 5 + u3 x 6) / 15)
    const media_parcial = eval("((this.unidade_1 * 4) + (this.unidade_2 * 5) + (this.unidade_3 * 6)) / 15");
    const media_final = media_parcial.toFixed(1);

    if (media_final >= 7)
      return 'aprovado';
    else if (media_final < 7 && media_final >= 4)
      return 'recuperacao';
    else
      return 'reprovado';
  }

  get mediaFinal() {
    // média = ((u1 x 4 + u2 x 5 + u3 x 6) / 15)
    const media = (eval("((this.unidade_1 * 4) + (this.unidade_2 * 5) + (this.unidade_3 * 6)) / 15")).toFixed(1);
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

  goToTrintahoras(params){
    if (!params) params = {};
    this.navCtrl.push(TrintahorasPage);
  }

  goToAjuda(params){
    if (!params) params = {};
    this.navCtrl.push(AjudaPage);
  }

  // Método Para Sair da Conta
  signOut(){
    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((error) => {
       console.error(error);
      });
  }

}

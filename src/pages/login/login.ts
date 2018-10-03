import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/user';
import { AuthService } from '../../providers/auth-service';
import { CriarcontaPage } from '../criarconta/criarconta';
import { ResetarsenhaPage } from '../resetarsenha/resetarsenha';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
      public navCtrl: NavController,
      private toastCtrl: ToastController,
      private AuthService: AuthService) {
  }

  goToCriarConta(params){
    if (!params) params = {};
    this.navCtrl.push(CriarcontaPage);
  }

  goToResetarSenha(params){
    if (!params) params = {};
    this.navCtrl.push(ResetarsenhaPage);
  }

  goTologin() {
    if (this.form.form.valid) {
      let toast = this.toastCtrl.create({ duration: 3000, position: 'botton'});

      this.AuthService.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(HomePage);
        })
        // Tratamento de Erro
        .catch((error: any) => {
          if (error.code  == 'auth/user-disabled') {
            toast.setMessage('Conta desativada! :(');
          } else if (error.code  == 'auth/invalid-email') {
            toast.setMessage('Email invalido! :(');
        } else if (error.code  == 'auth/user-not-found') {
            toast.setMessage('Conta não encontrada! :(');
        } else if (error.code  == 'auth/wrong-password') {
            toast.setMessage('Senha invalida! :(');
          }
          toast.present();
        });
    }
  }

  goBack(){
      this.navCtrl.pop();
  }

}

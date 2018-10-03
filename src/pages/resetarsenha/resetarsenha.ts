import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-resetarsenha',
  templateUrl: 'resetarsenha.html',
})

export class ResetarsenhaPage {
  userEmail: string = '';
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private AuthService: AuthService) {
  }

  goToResetarSenha() {
    if (this.form.form.valid) {
    let toast = this.toastCtrl.create({ duration: 3000, position: 'botton'});

    this.AuthService.resetPassword(this.userEmail)
      .then(() => {
        // Exibindo Toast de Sucesso
        toast.setMessage('Email de Recuperação enviado! :)')
        toast.present();
        this.navCtrl.pop();
        })
        // Tratamento de Erro
        .catch((error: any) => {
          if (error.code  == 'auth/user-not-found') {
            toast.setMessage('Conta não encontrada! :(');
          } else if (error.code  == 'auth/invalid-email') {
            toast.setMessage('Email invalido! :(');
          }
          toast.present();
        });
    }
  }

  goBack(){
      this.navCtrl.pop();
  }

}

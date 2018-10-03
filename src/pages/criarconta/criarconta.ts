import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/user';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-criarconta',
  templateUrl: 'criarconta.html',
})
export class CriarcontaPage {
    user: User = new User();
    @ViewChild('form') form: NgForm;

    constructor(
        public navCtrl: NavController,
        private toastCtrl: ToastController,
        private AuthService: AuthService) {
    }

    // Método de Criação da Conta (auth-service.ts)
    createAccount() {
        if (this.form.form.valid) {
            let toast = this.toastCtrl.create({ duration: 3000, position: 'botton'});

            this.AuthService.createUser(this.user)
                .then((user: any) => {
                    // Disparando email de verificação
                    user.sendEmailVerification();
                    // Exibindo Toast de Notificação
                    toast.setMessage('Bem vindo! Conta criada com sucesso.');
                    toast.present();
                    this.navCtrl.setRoot(HomePage);
                })
                // Tratamento de Erro
                .catch((error: any) => {
                  if (error.code  == 'auth/email-already-in-use') {
                    toast.setMessage('Email já cadastrado!');
                  } else if (error.code  == 'auth/invalid-email') {
                    toast.setMessage('Email invalido!');
                  } else if (error.code  == 'auth/operation-not-allowed') {
                    toast.setMessage('DB Error: Contate os desenvolvedores!');
                  } else if (error.code  == 'auth/weak-password') {
                    toast.setMessage('Senha fraca: Informe no mínimo 6 caracteres!');
                  }
                  toast.present();
                });
        }
    }

    goBack() {
      this.navCtrl.pop();
    }

}

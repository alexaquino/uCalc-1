import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// Pages
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TrintahorasPage } from '../pages/trintahoras/trintahoras';
import { AprovadoPage } from '../pages/aprovado/aprovado';
import { RecuperacaoPage } from '../pages/recuperacao/recuperacao';
import { ReprovadoPage } from '../pages/reprovado/reprovado';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { Media } from '../providers/media';
import { LoginPage } from '../pages/login/login';
import { CriarcontaPage } from '../pages/criarconta/criarconta';
import { ResetarsenhaPage } from '../pages/resetarsenha/resetarsenha';
import { StatusBar } from '@ionic-native/status-bar';
// Autenticação / Serviços
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service';

// Configuração Firebase (obtido do console Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyBAQq2g-0ngcoEa4eBfuKkwUBVHWexvGi0",
    authDomain: "ucalc-beta.firebaseapp.com",
    databaseURL: "https://ucalc-beta.firebaseio.com",
    projectId: "ucalc-beta",
    storageBucket: "ucalc-beta.appspot.com",
    messagingSenderId: "993019474260"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrintahorasPage,
    AprovadoPage,
    RecuperacaoPage,
    ReprovadoPage,
    AjudaPage,
    LoginPage,
    CriarcontaPage,
    ResetarsenhaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrintahorasPage,
    AprovadoPage,
    RecuperacaoPage,
    ReprovadoPage,
    AjudaPage,
    LoginPage,
    CriarcontaPage,
    ResetarsenhaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}

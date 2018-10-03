import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;

    constructor(private AngularFireAuth: AngularFireAuth) {
        this.user = AngularFireAuth.authState;
    }

    // Método: Criação da Conta
    createUser(user: User) {
        return this.AngularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    // Método: LogIn
    signIn(user: User) {
        return this.AngularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);

    }

    // Método: LogOut
    signOut() {
      return this.AngularFireAuth.auth.signOut();
    }

    // Método: Resetar Senha
    resetPassword(email: string) {
      return this.AngularFireAuth.auth.sendPasswordResetEmail(email);
    }
}

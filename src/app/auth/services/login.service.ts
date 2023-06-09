import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario | null> {
    let usu = new Usuario(1, "ALUNO", login.email, "(41)99999-9999", login.senha, 0);
    if (login.email == login.senha) {
      if (login.email == "ADMIN") {
        usu = new Usuario(1, "ADMIN", login.email, "(41)99999-9999", login.senha, 5);
      }
      else if (login.email == "ORIENTADOR") {
        usu = new Usuario(1, "ORIENTADOR", login.email, "(41)99999-9999", login.senha, 3);
      }
      return of(usu);
    }
    else {
      return of(null);
    }
  }

}
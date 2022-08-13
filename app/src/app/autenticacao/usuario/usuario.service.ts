import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import  jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({} as Usuario);

  constructor(
    private tokenService: TokenService
  ) {
    if (this.tokenService.possuiToken()) {
      this.decodeJwt();
    }
  }

  decodeJwt() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodeJwt();
  }

  logout() {
    this.tokenService.removerToken();
    this.usuarioSubject.next({} as Usuario);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}

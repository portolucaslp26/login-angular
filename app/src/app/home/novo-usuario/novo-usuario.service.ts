import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient
    ) { }

  cadastrar(usuario: NovoUsuario) {
    return this.http.post('http://localhost:3000/user/signup', usuario);
  }

  verificaUsuarioExistente(usuario: string) {
    return this.http.get(`http://localhost:3000/user/exists/${usuario}`);
  }
}

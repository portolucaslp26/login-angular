import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(
    private novoUsuarioService: NovoUsuarioService
  ) { }

  usuarioExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(userName => this.novoUsuarioService.verificaUsuarioExistente(userName)),
        map(usuarioExistente => usuarioExistente ? { usuarioExistente: true } : null),
        first() // para não ficar em looping
      );
    }
  }
}

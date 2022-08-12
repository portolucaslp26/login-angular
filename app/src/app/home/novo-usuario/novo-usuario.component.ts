import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { lowerCaseValidator } from './minusculo.validator';
import { usuarioSenhaValidator } from './usuario-senha-iguais.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  mensagem!: string;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [
        Validators.required,
        Validators.minLength(4),
        lowerCaseValidator
      ],[this.usuarioExisteService.usuarioExiste()]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    },
      {
        validators: [usuarioSenhaValidator]
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const usuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastrar(usuario).subscribe(() =>{
        this.router.navigate(['']);
      }, err => {console.error(err)});
    }

  }

}

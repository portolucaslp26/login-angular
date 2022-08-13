import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$ = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['/']);
  }
}

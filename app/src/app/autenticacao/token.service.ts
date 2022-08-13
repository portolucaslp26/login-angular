import { Injectable } from '@angular/core';

  const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken() {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  }

  salvarToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  removerToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  possuiToken(): boolean {
    return !!this.retornaToken();
  }
}

import { FormGroup } from "@angular/forms";

export function usuarioSenhaValidator(group: FormGroup): any {
  const userName = group.get('userName')?.value ?? '';
  const password = group.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return userName !== password ? false : { senhaIgualUsuario: true };
  } else {
    return false;
  }
}

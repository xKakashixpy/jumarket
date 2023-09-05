import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  password: string = '';

  validatePassword() {
    // Validar que la contraseña cumple con los requisitos
    const regex = /^(?=.*[A-Z])(?=.*\d{4})(?=.*[a-z]{3}).{8,}$/;

    if (regex.test(this.password)) {
      console.log('Contraseña válida');
    } else {
      console.log('La contraseña no cumple con los requisitos.');
    }
  }

  ngOnInit() {
    // Aquí puedes realizar cualquier inicialización necesaria cuando se carga la página.
  }
}

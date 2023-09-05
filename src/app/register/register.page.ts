import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d{4})(?=.*[a-z]{3}).{8,}$/)]],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.valid) {
      // El formulario es válido, puedes realizar cualquier otra lógica aquí
      // Luego, navega a la página de inicio (reemplaza 'home' con tu ruta real)
      this.router.navigate(['/home']);
    } else {
      // El formulario no es válido, puedes mostrar un mensaje de error o realizar otras acciones
    }
  }
}






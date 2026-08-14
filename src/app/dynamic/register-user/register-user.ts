import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register-user.html', 
  styleUrl: './register-user.css'     
})
export class RegisterUserComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      correo_electronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmacion_contrasena: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const contrasena = group.get('contrasena')?.value;
    const confirmacion = group.get('confirmacion_contrasena')?.value;
    return contrasena === confirmacion ? null : { mismatch: true };
  }

  get nombre() { return this.registerForm.get('nombre'); }
  get apellido() { return this.registerForm.get('apellido'); }
  get correo_electronico() { return this.registerForm.get('correo_electronico'); }
  get contrasena() { return this.registerForm.get('contrasena'); }
  get confirmacion_contrasena() { return this.registerForm.get('confirmacion_contrasena'); }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado:', this.registerForm.value);
      alert('¡Registro exitoso!');
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
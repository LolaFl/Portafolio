import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-proyect',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-proyect.html',
  styleUrl: './create-proyect.css'
})
export class CreateProyectComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  proyectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.proyectForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      descripcion_larga: ['', [Validators.required, Validators.minLength(20)]],
      icono: ['', [Validators.required]],
      estado_del_proyecto: ['', [Validators.required]],
      rol_del_equipo: ['', [Validators.required, Validators.minLength(5)]],
      tecnologias: ['', [Validators.required]],
      repo: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  get f() { return this.proyectForm.controls; }

  onSubmit() {
    if (this.proyectForm.valid) {
      const formData = this.proyectForm.value;
      const technologiesArray = formData.tecnologias.split(',').map((tech: string) => tech.trim());
      const proyectData = {
        ...formData,
        tecnologias: technologiesArray,
        demo: null
      };
      this.save.emit(proyectData);
    }
  }

  onClose() {
    this.close.emit();
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }
  public formSubmited = false;

  public registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    terminos: [true, [Validators.required]]
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  ngOnInit(): void {
  }

  crearUsuario() {
    this.formSubmited = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.usuarioService.crearUsuario(this.registerForm.value).subscribe(result => {
      this.router.navigateByUrl('/');
    }, err => {
      swal.fire('Error', err.error.msg, 'error');
    });
  }

  campoNoValido(campo): boolean {
    if (this.registerForm.get(campo).invalid && this.formSubmited) {
      return true;
    } else {
      return false;
    }
  }

  contrasenasValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;
    let result: boolean;
    (pass1 !== pass2) && this.formSubmited ? result = true : result = false;
    return result;
  }

  passwordsIguales(pass1, pass2) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);
      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }
}

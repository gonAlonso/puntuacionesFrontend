import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup

  constructor( public formBuilder: FormBuilder, public authSerrvice:AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['angel@gmail.com', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit(formValue){
    //alert("Se ha enviado el formulario correctamente: "+ formValue.email+' '+ formValue.password )
    console.log( "Inicio de sesion")
    this.authSerrvice.login( formValue.email, formValue.password ).subscribe(
      result => {
        const datos = JSON.stringify({email:formValue.email, token: result})
        localStorage.setItem('currentUser', datos)
      },
      error => {
        alert("Error al logearte")
        console.log( "ERROR:")
        console.log( error )
      });

  }
}

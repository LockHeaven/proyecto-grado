import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    username: ['dojita1', Validators.required],
    password: ['12345', Validators.required]
  })

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService ) { }

  login(){

    const { username, password } = this.miFormulario.value;

    this.authService.login( username, password )
      .subscribe(ok => {
        if(ok === true) {
          this.router.navigateByUrl('/home');
        } else{
          Swal.fire({
            title: 'Oops...',
            text: ok,
            icon: 'error'
          })
          console.log(ok);
        }
      })
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public error = false;

  registerForm = new FormGroup({
    // nick: new FormControl(''),  agregar luego con otra db
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private authSvc: AuthService, private router: Router) { }

  async onRegister(){
    const {email, password} = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['/verificarEmail']);
      }
    }
    catch (error){
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

}

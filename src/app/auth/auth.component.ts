import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error:string = '';

  constructor(private authenService: AuthenticationService) { }



  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;


    if (this.isLoginMode) {
      // ....
    }
    else {
      this.authenService.signUp(email, password).subscribe(
        (resData) => {

          console.log(resData);

          this.isLoading = false;
        },
        (errorMessage) => {
          this.error = errorMessage.message;
          console.log(errorMessage);
          this.isLoading = false;
        }
      )

    }
    form.reset();
  }



  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}

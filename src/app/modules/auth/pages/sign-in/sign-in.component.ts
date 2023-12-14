import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private readonly _router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.emailAsyncValidator()],
        updateOn: 'blur'
      }],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
   if(this.authService.isLoggedIn()){
    this._router.navigate(['/'])
      return ;
   }
  }


  emailAsyncValidator(): AsyncValidatorFn {
    return (control): Observable<{ [key: string]: any } | null> => {
      const email = control.value;

      // Simulate an asynchronous operation (e.g., checking email availability)
      return this.checkEmailAvailability(email).pipe(
        map(available => (available ? null : { emailTaken: true })),
        catchError(() => of(null)) // Handle errors gracefully
      );
    };
  }

  // Simulated asynchronous operation (replace with your actual API call)
  private checkEmailAvailability(email: string): Observable<boolean> {
    return of(true);
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(user).subscribe(
        (response) => {
          this.authService.setJwtToken(response.accessToken);
          if(this.authService.isLoggedIn()){
            console.log(response.data);
            this._router.navigate(['/dashboard'])
          }
          // console.log(response.accessToken);
        },
        (error) => {
          console.error('Login error', error);
        }
      );
      
      // this.router.navigate(['/home']);
    }
  }
}

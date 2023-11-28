import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { ApiService } from 'src/app/core/services/ap\bi.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private apiService:ApiService) {
    this.loginForm = this.formBuilder.group({
      email: ['', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.emailAsyncValidator()],
        updateOn: 'blur'
      }],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
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
    // Replace this with your actual API call or asynchronous operation
    // For demonstration purposes, always return true here
    return of(true);
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.apiService.login(user).subscribe(
        (response) => {
          this.apiService.setJwtToken(response.accessToken);
          console.log(response.accessToken);
        },
        (error) => {
          console.error('Login error', error);
        }
      );
    }

    console.log(this.loginForm.valid);
    console.log("hello");
  }
}

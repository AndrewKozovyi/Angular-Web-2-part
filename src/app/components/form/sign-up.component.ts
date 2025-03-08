import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
})
export class SignUpComponent {
  SignUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private toastr: ToastrService) {
    this.SignUpForm = this.fb.group({
      username: ['', [Validators.required, this.usernameValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  usernameValidator(control: AbstractControl): ValidationErrors | null {
    const username = control.value as string;
    const regex = /[ @!#$%^&*()<>?/\|}{~:;,+=]/;
    if (regex.test(username)) {
      return { invalidUsername: 'Ім\'я користувача не може містити пробіли або спеціальні символи' };
    }
    return null;
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,}$/;
    if (!regex.test(password)) {
      return { invalidPassword: 'Пароль має містити мінімум 8 символів, 1 велику літеру, 1 маленьку літеру і 1 цифру' };
    }
    return null;
  }

  onSubmit() {
    if (this.SignUpForm.valid) {
      this.http.post('http://127.0.0.1:5001/user/sign-up', this.SignUpForm.value).subscribe({
        next: () => this.router.navigate(['/login']),
        error: (error) => {
          const errorMessage = error?.error?.error || 'Помилка авторизації';
          this.toastr.error(errorMessage, 'API Error', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-bottom-right',
            tapToDismiss: false
          });
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  formData = {
    email: '',
    password: ''
  };

  rememberMe = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    // Validation
    if (!this.formData.email) {
      this.errorMessage = 'Please enter email address';
      return;
    }

    if (!this.formData.password) {
      this.errorMessage = 'Please enter password';
      return;
    }

    this.isLoading = true;

    this.apiService.login(this.formData.email, this.formData.password).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.successMessage = 'Login successful! Redirecting...';
        
        // Store token if provided
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }

        // Store user info if provided
        if (response.user) {
          localStorage.setItem('userInfo', JSON.stringify(response.user));
        }

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    );
  }
}

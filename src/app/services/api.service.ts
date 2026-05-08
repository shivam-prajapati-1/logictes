import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://localhost:7113/api';

  constructor(private http: HttpClient) { }

  getInquiries() {
    return this.http.get(`${this.baseUrl}/Inquiry`);
  }

  getShipments() {
    return this.http.get(`${this.baseUrl}/Shipment`);
  }

  trackShipment(trackingId: string) {
    return this.http.get(`${this.baseUrl}/Shipment/track/${trackingId}`);
  }

  createInquiry(inquiryData: any) {
    return this.http.post(`${this.baseUrl}/Inquiry`, inquiryData);
  }

  getBranches() {
    return this.http.get(`${this.baseUrl}/Branch`);
  }

  getJobs() {
    return this.http.get(`${this.baseUrl}/Career/jobs`);
  }

  submitApplication(applicationData: any) {
    return this.http.post(`${this.baseUrl}/Career/apply`, applicationData);
  }

  // Authentication endpoints
  checkAuth() {
    return this.http.get(`${this.baseUrl}/Auth`);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/Auth/login`, { email, password });
  }

  // User registration
  registerUser(userData: any) {
    return this.http.post(`${this.baseUrl}/User`, userData);
  }

}
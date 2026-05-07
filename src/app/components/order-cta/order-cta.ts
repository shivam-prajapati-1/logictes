import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-order-cta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="order-cta-section py-5">
      <!-- Road Visual -->
      <div class="road-container position-relative mb-5 py-5">
        <div class="road-path">
            <div class="road-dashes"></div>
        </div>
        <div class="pins-container d-flex justify-content-between px-lg-5">
          <div class="pin-item" *ngFor="let img of pinImages">
            <div class="pin-circle shadow">
              <img [src]="img" alt="Step" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="pin-point"></div>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="container text-center pt-5">
        <div class="row g-4 justify-content-center align-items-stretch">
          <div class="col-md-5 d-flex flex-column justify-content-between">
            <h2 class="display-5 fw-bold font-secondary mb-4">Place Your Order Today!</h2>
            <div>
              <button (click)="openQuoteModal()" class="btn btn-atc-purple-lg rounded-pill px-5 py-3 fw-bold fs-4 shadow">Enter Details</button>
            </div>
          </div>
          <div class="col-md-5 d-flex flex-column justify-content-between">
            <h2 class="display-5 fw-bold font-secondary mb-4">Track Your Shipment</h2>
            <div class="input-group tracking-input-group mx-auto" style="max-width: 400px;">
              <input type="text" 
                     class="form-control rounded-start-pill ps-4 py-3 border-0 shadow-sm" 
                     placeholder="Enter Tracking ID" 
                     [(ngModel)]="trackingId"
                     (keyup.enter)="onTrack()">
              <button class="btn btn-atc-purple rounded-end-pill px-4" (click)="onTrack()">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .order-cta-section {
      background-color: #ffffff;
      overflow: hidden;
    }
    .road-container {
      width: 100%;
      background: white;
    }
    .road-path {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 40px;
      background: #333;
      transform: translateY(-50%);
      z-index: 1;
    }
    .road-dashes {
      width: 100%;
      height: 2px;
      border-top: 2px dashed rgba(255, 255, 255, 0.5);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .pins-container {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
    .pin-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    .pin-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid var(--atc-purple);
      overflow: hidden;
      background: white;
      transition: transform 0.3s ease;
    }
    .pin-item:hover .pin-circle {
      transform: translateY(-10px) scale(1.05);
    }
    .pin-point {
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-top: 15px solid var(--atc-purple);
      margin-top: -5px;
    }
    .font-secondary {
      font-family: inherit;
      letter-spacing: -1px;
    }
    .btn-atc-purple-lg {
      background-color: var(--atc-purple);
      color: white;
      border: none;
      transition: all 0.3s ease;
    }
    .btn-atc-purple-lg:hover {
      background-color: var(--atc-purple-dark);
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(107, 29, 92, 0.2) !important;
    }
    .btn-atc-purple {
      background-color: var(--atc-purple);
      color: white;
      border: none;
    }
    .tracking-input-group input {
      border: 1px solid #eee !important;
    }
    .tracking-input-group .form-control:focus {
      box-shadow: none;
      border-color: var(--atc-purple) !important;
    }
    @media (max-width: 991.98px) {
      .pin-circle {
        width: 70px;
        height: 70px;
      }
      .display-5 {
        font-size: 2rem;
      }
    }
    @media (max-width: 767.98px) {
      .pins-container {
        flex-wrap: wrap;
        gap: 20px;
      }
      .road-path {
        display: none;
      }
    }
  `]
})
export class OrderCtaComponent {
  trackingId: string = '';

  pinImages = [
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=300&q=80',
    'https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  constructor(private router: Router, private modalService: ModalService) {}

  onTrack() {
    if (this.trackingId.trim()) {
      this.router.navigate(['/tracking-result'], { 
        queryParams: { lrNo: this.trackingId.trim() } 
      });
    }
  }

  openQuoteModal() {
    this.modalService.openQuoteModal();
  }
}

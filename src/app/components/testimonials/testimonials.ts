import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section py-5">
      <div class="container py-5">
        <div class="testimonial-card shadow-lg rounded-4 overflow-hidden d-flex flex-column flex-md-row bg-white">
          <div class="testimonial-img col-md-5">
            <img src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Medical Team" class="w-100 h-100 object-fit-cover">
          </div>
          <div class="testimonial-content col-md-7 p-4 p-lg-5 d-flex flex-column justify-content-center">
            <h2 class="font-condensed fw-bold mb-5 display-5 text-dark">What do our customers say?</h2>
            <div class="quote-text-container mb-4">
              <p class="fw-bold fs-5 text-dark lh-sm mb-4">
                "I am writing to express my sincere appreciation for the service I received from your team. I briefly mentioned the service you received and was impressed by the outstanding support and expertise provided by the True Load team. ...
              </p>
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn btn-atc-teal rounded-pill px-4 py-2 fw-bold shadow-sm">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background-color: #f8f9fa;
      position: relative;
      margin-top: -60px;
      z-index: 5;
    }
    .testimonial-card {
      min-height: 450px;
      border: none;
    }
    .font-condensed {
      font-family: 'Oswald', 'Arial Narrow', sans-serif;
      text-transform: none;
      letter-spacing: -1px;
    }
    .lh-sm {
      line-height: 1.4 !important;
    }
    .btn-atc-teal {
      background-color: var(--atc-teal);
      color: white;
      transition: all 0.3s ease;
      border: none;
    }
    .btn-atc-teal:hover {
      background-color: #1a3d37;
      transform: translateY(-2px);
    }
    @media (max-width: 767.98px) {
      .testimonials-section {
        margin-top: 0;
      }
      .display-5 {
        font-size: 2rem;
      }
    }
  `]
})
export class TestimonialsComponent { }

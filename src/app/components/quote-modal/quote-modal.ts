import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-quote-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-modal.html',
  styleUrls: ['./quote-modal.css']
})
export class QuoteModalComponent {
  private modalService = inject(ModalService);
  isVisible$ = this.modalService.showQuoteModal$;

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    pickupLocation: '',
    deliveryLocation: '',
    goodsType: '',
    weightVolume: '',
    timeline: '',
    description: ''
  };

  close() {
    this.modalService.closeQuoteModal();
  }

  onSubmit() {
    console.log('Quote Request Submitted:', this.formData);
    // Here you would typically call an API service to send the data
    alert('Thank you! Your quote request has been sent. Our team will contact you soon.');
    this.close();
    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      pickupLocation: '',
      deliveryLocation: '',
      goodsType: '',
      weightVolume: '',
      timeline: '',
      description: ''
    };
  }
}

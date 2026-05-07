import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent, Footer, CommonModule, FormsModule],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css']
})
export class ContactUs {
  showModal = false;
  selectedIssueType = '';
  
  // Form model
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
    issueType: '',
    orderNumber: '',
    branch: '',
    goodsType: 'Electronics',
    freightType: 'Road ways'
  };

  faqs = [
    { id: 1, question: "1. Where is my consignment? How can I check my package's current location?", isOpen: false },
    { id: 2, question: "2. My material is booked but not yet dispatched. What should I do?", isOpen: false },
    { id: 3, question: "3. What is True Load's delivery network?", isOpen: false },
    { id: 4, question: "4. How can I find the contact number for my delivery branch?", isOpen: false },
    { id: 5, question: "5. I received a short package. Where can I report this?", isOpen: false },
    { id: 6, question: "6. What is the per kg rate and transit time for my location?", isOpen: false }
  ];

  constructor(private apiService: ApiService) {}

  toggleFaq(faq: any) {
    faq.isOpen = !faq.isOpen;
  }

  openContactModal(issueType: string) {
    this.selectedIssueType = issueType;
    this.formData.issueType = issueType;
    this.showModal = true;
  }

  closeContactModal() {
    this.showModal = false;
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      description: '',
      issueType: '',
      orderNumber: '',
      branch: '',
      goodsType: 'Electronics',
      freightType: 'Road ways'
    };
  }

  onSubmit() {
    console.log('Form submission started. Current form data:', this.formData);

    // Basic mapping to backend Inquiry model
    const inquiryPayload = {
      name: this.formData.name || 'Web User',
      email: this.formData.email || 'customer@trueload.in',
      phone: this.formData.phone || '0000000000',
      issueType: this.selectedIssueType,
      orderNumber: this.formData.orderNumber,
      branch: this.formData.branch,
      goodsType: this.formData.goodsType,
      freightType: this.formData.freightType,
      message: this.formData.description || 'No description provided',
      status: 'New',
      createdDate: new Date().toISOString()
    };

    console.log('Sending payload to backend:', inquiryPayload);

    this.apiService.createInquiry(inquiryPayload).subscribe({
      next: (response) => {
        console.log('Backend response:', response);
        alert('Thank you! Your inquiry has been submitted successfully.');
        this.closeContactModal();
      },
      error: (error) => {
        console.error('Full error details from backend:', error);
        alert('Backend Error: ' + (error.message || 'Check console for details'));
      }
    });
  }
}

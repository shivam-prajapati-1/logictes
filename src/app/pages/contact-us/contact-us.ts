import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  faqs = [
    {
      id: 1,
      question: "1. Where is my consignment? How can I check my package's current location?",
      isOpen: false
    },
    {
      id: 2,
      question: "2. My material is booked but not yet dispatched. What should I do?",
      isOpen: false
    },
    {
      id: 3,
      question: "3. What is True Load's delivery network?",
      isOpen: false
    },
    {
      id: 4,
      question: "4. How can I find the contact number for my delivery branch?",
      isOpen: false
    },
    {
      id: 5,
      question: "5. I received a short package. Where can I report this?",
      isOpen: false
    },
    {
      id: 6,
      question: "6. What is the per kg rate and transit time for my location?",
      isOpen: false
    }
  ];

  toggleFaq(faq: any) {
    faq.isOpen = !faq.isOpen;
  }

  openContactModal(issueType: string) {
    this.selectedIssueType = issueType;
    this.showModal = true;
  }

  closeContactModal() {
    this.showModal = false;
  }
}

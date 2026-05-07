import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  isScrolled = false;
  showTrackingModal = false;
  isMenuCollapsed = true;
  trackingNumber = '';

  constructor(private router: Router, private modalService: ModalService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  toggleTrackingModal() {
    this.showTrackingModal = !this.showTrackingModal;
  }

  onTrack() {
    if (this.trackingNumber.trim()) {
      this.showTrackingModal = false;
      this.router.navigate(['/tracking-result'], { queryParams: { lrNo: this.trackingNumber } });
      this.trackingNumber = ''; // Clear input
    }
  }
}
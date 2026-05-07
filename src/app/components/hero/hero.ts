import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  masteryText: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: 'images/truck-1.png',
      title: "India's Most Trusted<br>Delivery Service",
      subtitle: "Fast, reliable, and always on time —<br>that's a promise we have been keeping since 1939!",
      buttonText: "Learn More",
      buttonLink: "/about",
      masteryText: "Mastery"
    },
    {
      image: 'images/truck-2.png',
      title: "From Pickup to Delivery,<br>We've Got You Covered",
      subtitle: "Partner with True Load and rest assured with your cargo.<br>We will take care of it on an end-to-end basis.",
      buttonText: "Request a Quote",
      buttonLink: "modal", // Special flag to open modal
      masteryText: "Expertise"
    }
  ];
  
  currentSlide = 0;
  private slideInterval: any;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.slideInterval);
    this.startAutoSlide();
  }

  openQuoteModal() {
    this.modalService.openQuoteModal();
  }
}
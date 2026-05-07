import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { AboutSection } from '../../components/about-section/about-section';
import { WhoWeDoItFor } from '../../components/who-we-do-it-for/who-we-do-it-for';
import { ServicesSection } from '../../components/services-section/services-section';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { OrderCtaComponent } from '../../components/order-cta/order-cta';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    Hero,
    AboutSection,
    WhoWeDoItFor,
    ServicesSection,
    TestimonialsComponent,
    OrderCtaComponent,
    Footer
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent { }
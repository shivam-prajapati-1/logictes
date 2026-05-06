import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, Footer],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {}

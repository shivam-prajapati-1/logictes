import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [NavbarComponent, Footer],
  templateUrl: './career.html',
  styleUrls: ['./career.css']
})
export class Career {}

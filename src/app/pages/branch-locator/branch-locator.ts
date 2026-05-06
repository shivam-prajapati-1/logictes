import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-branch-locator',
  standalone: true,
  imports: [CommonModule, NavbarComponent, Footer],
  templateUrl: './branch-locator.html',
  styleUrl: './branch-locator.css',
})
export class BranchLocatorComponent {}

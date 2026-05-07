import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';
import { QuoteModalComponent } from './components/quote-modal/quote-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollToTop, QuoteModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('True Load');
}





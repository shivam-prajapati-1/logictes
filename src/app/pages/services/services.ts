import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, Footer],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  constructor(private modalService: ModalService) {}

  openQuoteModal() {
    this.modalService.openQuoteModal();
  }
}

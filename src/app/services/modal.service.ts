import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showQuoteModalSource = new BehaviorSubject<boolean>(false);
  showQuoteModal$ = this.showQuoteModalSource.asObservable();

  openQuoteModal() {
    this.showQuoteModalSource.next(true);
  }

  closeQuoteModal() {
    this.showQuoteModalSource.next(false);
  }
}

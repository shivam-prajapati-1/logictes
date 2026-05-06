import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracking-result',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tracking-result.html',
  styleUrls: ['./tracking-result.css']
})
export class TrackingResultComponent implements OnInit {
  lrNo: string = 'S6952924';
  currentStatus: string = 'DELIVERED';
  showTrackingModal: boolean = false;
  newTrackingNumber: string = '';

  trackingTimeline = [
    { status: 'Consignment Booked', date: '13/04/2026', icon: 'LR', isText: true, completed: true },
    { status: 'Consignment In Transit', date: '14/04/2026', icon: 'bi-truck', isText: false, completed: true },
    { status: 'Reached at Delivery Branch', date: '18/04/2026', icon: 'bi-building', isText: false, completed: true },
    { status: 'Consignment Out for Delivery', date: '18/04/2026', icon: 'bi-truck-flatbed', isText: false, completed: true },
    { status: 'Consignment Delivered', date: '20/04/2026', icon: 'bi-box-seam-fill', isText: false, completed: true }
  ];

  shipmentDetails = [
    { label: 'Consignor', value: 'TRUE LOAD LOGISTICS PRIVATE LIMITED-SGTN' },
    { label: 'Consignee', value: 'RENEE COSMETICS PVT LTD' },
    { label: 'Booking Location', value: 'SANJAY GANDHI TPT NAGAR' },
    { label: 'Delivery Location', value: 'KOLKATA' },
    { label: 'Delivery Type', value: 'Door' },
    { label: 'Weight(Kg)', value: '1200.00' },
    { label: 'Packages', value: '139' },
    { label: 'Payment Type', value: 'To Be Billed' },
    { label: 'Booking Type', value: 'PTL' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['lrNo']) {
        this.lrNo = params['lrNo'];
      }
    });
  }

  toggleTrackingModal() {
    this.showTrackingModal = !this.showTrackingModal;
  }

  onTrack() {
    if (this.newTrackingNumber.trim()) {
      this.lrNo = this.newTrackingNumber;
      this.showTrackingModal = false;
      this.newTrackingNumber = '';
    }
  }
}

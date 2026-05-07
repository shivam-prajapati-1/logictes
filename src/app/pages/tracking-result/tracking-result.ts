import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tracking-result',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tracking-result.html',
  styleUrls: ['./tracking-result.css']
})
export class TrackingResultComponent implements OnInit {
  lrNo: string = '';
  currentStatus: string = 'PENDING';
  showTrackingModal: boolean = false;
  newTrackingNumber: string = '';
  isLoading: boolean = false;
  error: string | null = null;

  trackingTimeline: any[] = [];
  shipmentDetails: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const lr = params['lrNo'];
      if (lr) {
        this.lrNo = lr;
        this.fetchTrackingData(lr);
      }
    });
  }

  fetchTrackingData(id: string) {
    this.isLoading = true;
    this.error = null;
    
    this.apiService.trackShipment(id).subscribe({
      next: (response: any) => {
        console.log('Tracking API response:', response);
        // Take first element if it's an array
        const data = Array.isArray(response) ? response[0] : response;
        
        if (data) {
          this.mapDataToUI(data);
        } else {
          this.error = 'No data found for this ID.';
          this.setDefaultData();
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Tracking API error:', err);
        this.error = 'No shipment found with this tracking number.';
        this.isLoading = false;
        this.setDefaultData();
      }
    });
  }

  mapDataToUI(data: any) {
    if (!data) return;
    console.log('Mapping data to UI:', data);
    
    // Priority: 1. lrNumber from API, 2. The searched ID we already have
    this.lrNo = data.lrNumber || data.LrNumber || data.lrNo || this.lrNo;
    this.currentStatus = data.status || data.Status || 'IN TRANSIT';

    // Map shipment details (Flexible mapping for PascalCase or camelCase)
    this.shipmentDetails = [
      { label: 'Consignor', value: data.Consignor || data.consignor || 'N/A' },
      { label: 'Consignee', value: data.Consignee || data.consignee || 'N/A' },
      { label: 'Booking Location', value: data.BookingLocation || data.bookingLocation || data.origin || 'N/A' },
      { label: 'Delivery Location', value: data.DeliveryLocation || data.deliveryLocation || data.destination || 'N/A' },
      { label: 'Delivery Type', value: data.DeliveryType || data.deliveryType || 'N/A' },
      { label: 'Weight(Kg)', value: data.Weight || data.weight || '0.00' },
      { label: 'Packages', value: data.Packages || data.packages || '0' },
      { label: 'Payment Type', value: data.PaymentType || data.paymentType || 'N/A' },
      { label: 'Booking Type', value: data.BookingType || data.bookingType || 'N/A' }
    ];

    // Map timeline (assuming backend returns an array of history)
    if (data.history && Array.isArray(data.history)) {
      this.trackingTimeline = data.history.map((h: any) => ({
        status: h.status,
        date: h.date,
        location: h.location,
        completed: true,
        icon: this.getIconForStatus(h.status)
      }));
    } else {
      // Create a default timeline if history is missing
      this.trackingTimeline = [
        { status: 'Consignment Booked', date: data.bookingDate || 'N/A', icon: 'LR', isText: true, completed: true },
        { status: data.status, date: 'Current Status', icon: 'bi-truck', isText: false, completed: true }
      ];
    }
  }

  getIconForStatus(status: string): string {
    const s = status.toLowerCase();
    if (s.includes('booked')) return 'LR';
    if (s.includes('transit')) return 'bi-truck';
    if (s.includes('reached') || s.includes('branch')) return 'bi-building';
    if (s.includes('delivery') || s.includes('out')) return 'bi-truck-flatbed';
    if (s.includes('delivered')) return 'bi-box-seam-fill';
    return 'bi-info-circle';
  }

  setDefaultData() {
    this.lrNo = 'S695613';
    this.currentStatus = 'DELIVERED';
    this.shipmentDetails = [
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
    this.trackingTimeline = [
      { status: 'Consignment Booked', date: '13/04/2026', icon: 'LR', completed: true },
      { status: 'Consignment In Transit', date: '14/04/2026', icon: 'bi-truck', completed: true },
      { status: 'Reached at Delivery Branch', date: '18/04/2026', icon: 'bi-building', completed: true },
      { status: 'Consignment Out for Delivery', date: '18/04/2026', icon: 'bi-truck-flatbed', completed: true },
      { status: 'Consignment Delivered', date: '20/04/2026', icon: 'bi-box-seam-fill', completed: true }
    ];
  }

  toggleTrackingModal() {
    this.showTrackingModal = !this.showTrackingModal;
  }

  onTrack() {
    if (this.newTrackingNumber.trim()) {
      const newId = this.newTrackingNumber.trim();
      this.lrNo = newId;
      this.fetchTrackingData(newId);
      this.showTrackingModal = false;
      this.newTrackingNumber = '';
    }
  }
}

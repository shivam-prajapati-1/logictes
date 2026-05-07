import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-branch-locator',
  standalone: true,
  imports: [CommonModule, NavbarComponent, Footer, FormsModule],
  templateUrl: './branch-locator.html',
  styleUrl: './branch-locator.css',
})
export class BranchLocatorComponent implements OnInit {
  branches: any[] = [];
  filteredBranches: any[] = [];
  searchTerm: string = '';
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchBranches();
  }

  fetchBranches() {
    this.isLoading = true;
    this.apiService.getBranches().subscribe({
      next: (data: any) => {
        this.branches = Array.isArray(data) ? data : [data];
        this.filteredBranches = [...this.branches];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching branches:', err);
        this.isLoading = false;
      }
    });
  }

  filterBranches() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredBranches = [...this.branches];
      return;
    }

    this.filteredBranches = this.branches.filter(branch => 
      (branch.name && branch.name.toLowerCase().includes(term)) ||
      (branch.city && branch.city.toLowerCase().includes(term)) ||
      (branch.state && branch.state.toLowerCase().includes(term)) ||
      (branch.address && branch.address.toLowerCase().includes(term))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, NavbarComponent, Footer, FormsModule],
  templateUrl: './career.html',
  styleUrls: ['./career.css']
})
export class Career implements OnInit {
  jobs: any[] = [];
  isLoading: boolean = false;
  showApplyModal: boolean = false;
  selectedJob: any = null;
  showRolesSection: boolean = false;
  
  application = {
    jobId: 0,
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    resumeUrl: ''
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // We can pre-fetch but keep hidden, or fetch on click
    this.fetchJobs();
  }

  fetchJobs() {
    this.isLoading = true;
    this.apiService.getJobs().subscribe({
      next: (data: any) => {
        this.jobs = Array.isArray(data) ? data : [data];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching jobs:', err);
        this.isLoading = false;
      }
    });
  }

  scrollToRoles() {
    this.showRolesSection = true;
    // Small timeout to allow DOM to render the section before scrolling
    setTimeout(() => {
      const element = document.getElementById('open-roles');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  openApplyModal(job: any) {
    this.selectedJob = job;
    this.application.jobId = job.id;
    this.showApplyModal = true;
  }

  closeApplyModal() {
    this.showApplyModal = false;
    this.selectedJob = null;
    this.resetForm();
  }

  resetForm() {
    this.application = {
      jobId: 0,
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      resumeUrl: ''
    };
  }

  submitApplication() {
    // Map to PascalCase which is typical for C# backends
    const payload = {
      JobId: this.application.jobId,
      FullName: this.application.fullName,
      Email: this.application.email,
      Phone: this.application.phone,
      Experience: this.application.experience,
      ResumeUrl: this.application.resumeUrl
    };

    console.log('Submitting application payload:', payload);

    this.apiService.submitApplication(payload).subscribe({
      next: (res) => {
        console.log('Application submission success:', res);
        alert('Application submitted successfully!');
        this.closeApplyModal();
      },
      error: (err) => {
        console.error('Full error details from backend:', err);
        alert('Failed to submit application. Error: ' + (err.message || 'Please check console'));
      }
    });
  }
}

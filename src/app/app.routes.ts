import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Services } from './pages/services/services';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Career } from './pages/career/career';
import { ContactUs } from './pages/contact-us/contact-us';
import { AboutComponent } from './pages/about/about';
import { BranchLocatorComponent } from './pages/branch-locator/branch-locator';
import { TrackingResultComponent } from './pages/tracking-result/tracking-result';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: Services },
  { path: 'branch-locator', component: BranchLocatorComponent },
  { path: 'tracking-result', component: TrackingResultComponent },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'career', component: Career },
  { path: 'contact', component: ContactUs },
  { path: '**', redirectTo: '' }
];
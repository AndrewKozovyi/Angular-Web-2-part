import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadComponent: () => import('./components/form/sign-in.component').then(m => m.SignInComponent) },
  { path: 'register', loadComponent: () => import('./components/form/sign-up.component').then(m => m.SignUpComponent) },
  { path: 'cv', loadComponent: () => import('./components/cv/cv.component').then(m => m.CvComponent), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

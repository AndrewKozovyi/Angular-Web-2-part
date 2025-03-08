import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {MainInfoComponent} from '../main-info/main-info.component';


@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    MainInfoComponent,
    CommonModule
  ],
  templateUrl: './cv.component.html'
})
export class CvComponent {}

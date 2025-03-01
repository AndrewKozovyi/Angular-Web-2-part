import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainInfoComponent } from './components/main-info/main-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    MainInfoComponent,
    CommonModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular';
}

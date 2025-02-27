import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebad.component';
import { MainInfoComponent } from './components/main-info/main-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, MainInfoComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular';
}

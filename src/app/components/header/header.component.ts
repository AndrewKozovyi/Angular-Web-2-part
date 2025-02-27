import { Component } from '@angular/core';
import { ContactItemComponent } from './contact-item.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {}

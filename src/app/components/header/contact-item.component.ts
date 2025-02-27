import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  template: `
    <div class="mini-icon-box">
      <div class="mini-icon-contacts">
        <img class="icon" [src]="icon" alt="icon">
      </div>
      <p>{{ text }}</p>
    </div>
    <hr>
  `
})
export class ContactItemComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
}

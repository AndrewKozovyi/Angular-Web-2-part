import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference',
  template: `
    <div class="contacts">
      <h3>{{ name }}</h3>
      <h5 class="address">{{ address }}</h5>
      <h5>Tel: {{ phone }}</h5>
      <h5>Email: {{ email }}</h5>
    </div>
  `
})
export class ReferenceComponent {
  @Input() name: string = '';
  @Input() address: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
}

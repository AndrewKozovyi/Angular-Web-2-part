import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  template: `
    <div class="degree main-info-box non-open-info">
      <button class="years-horizontal open-info-btn">{{ year }}</button>
      <h4>{{ university }}</h4>
      <span class="open-info-box hidden-box">
        <h4>{{ degree }}</h4>
        <p>Lorem Ipsum has been the industry's standard dummy text...</p>
      </span>
    </div>
  `
})
export class EducationItemComponent {
  @Input() year: string = '';
  @Input() university: string = '';
  @Input() degree: string = '';
}

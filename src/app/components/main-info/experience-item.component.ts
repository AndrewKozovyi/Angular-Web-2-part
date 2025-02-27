import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience-item',
  template: `
    <div class="job main-info-box non-open-info">
      <button class="years-horizontal open-info-btn">{{ year }}</button>
      <h3>{{ company }}</h3>
      <span class="open-info-box hidden-box">
        <p class="city">{{ city }}</p>
        <h2>{{ position }}</h2>
        <h5 class="job-description">{{ description }}</h5>
      </span>
    </div>
  `
})
export class ExperienceItemComponent {
  @Input() year: string = '';
  @Input() company: string = '';
  @Input() city: string = '';
  @Input() position: string = '';
  @Input() description: string = '';
}

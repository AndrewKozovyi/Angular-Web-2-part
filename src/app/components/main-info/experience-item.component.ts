import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-experience-item',
  imports: [CommonModule],
  template: `
    <div class="job main-info-box" [ngClass]="{ 'non-open-info': isHidden }">
      <button
        class="open-info-btn"
        [ngClass]="{ 'years-horizontal': isHidden, 'years-vertical': !isHidden }"
        (click)="toggleInfo()"
      >
        {{ year }}
      </button>
      <h3>{{ company }}</h3>
      <span class="open-info-box"
            [ngClass]="{ 'hidden-box': isHidden, 'opened-box': isOpen, 'closed-box': isClosing }">
        <p class="city">{{ city }}</p>
        <h2>{{ position }}</h2>
        <p>{{ description }}</p>
      </span>
    </div>
  `
})
export class ExperienceItemComponent {
  @Input() year: string = '';
  @Input() company: string = '';
  @Input() city: string = '';
  @Input() position: string = '';
  @Input() description: string = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the\n' +
    '                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n' +
    '                        book. It has survived not only five centuries, but also the leap into electronic typesetting,\n' +
    '                        remaining essentially unchanged.';

  isOpen = false;
  isClosing = false;
  isHidden = true;

  toggleInfo() {
    if (this.isOpen) {
      this.isClosing = true;
      setTimeout(() => {
        this.isClosing = false;
        this.isHidden = true;
      }, 500);
    } else {
      this.isHidden = false;
      setTimeout(() => {
        this.isOpen = true;
      }, 100);
    }

    this.isOpen = !this.isOpen;
  }
}

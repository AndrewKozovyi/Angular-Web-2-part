import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-education-item',
  imports: [CommonModule],
  template: `
    <div class="degree main-info-box" [ngClass]="{ 'non-open-info': isHidden }">
      <button
        class="open-info-btn"
        [ngClass]="{ 'years-horizontal': isHidden, 'years-vertical': !isHidden }"
        (click)="toggleInfo()"
      >
        {{ year }}
      </button>
      <h4>{{ university }}</h4>
      <span class="open-info-box"
            [ngClass]="{ 'hidden-box': isHidden, 'opened-box': isOpen, 'closed-box': isClosing }">
        <h4>{{ degree }}</h4>
        <p>{{ description }}</p>
      </span>
    </div>
  `
})
export class EducationItemComponent {
  @Input() year: string = '';
  @Input() university: string = '';
  @Input() degree: string = '';
  @Input() description: string = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer\n' +
    '                        took a galley of type';

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

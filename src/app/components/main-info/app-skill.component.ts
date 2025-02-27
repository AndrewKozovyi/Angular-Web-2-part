import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  template: `
    <li>{{ name }}<div class="mn-progress-bar"><div class="progress" [attr.data-width]="progress"></div></div></li>
  `
})
export class SkillItemComponent {
  @Input() name: string = '';
  @Input() progress: number = 0;
}

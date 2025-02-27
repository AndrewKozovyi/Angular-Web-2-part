import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  template: `
    <li>{{ name }}<div class="sd-progress-bar"><div class="progress" [attr.data-width]="progress"></div></div></li>
  `
})
export class LanguageComponent {
  @Input() name: string = '';
  @Input() progress: number = 0;
}

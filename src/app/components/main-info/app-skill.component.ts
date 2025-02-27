import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  template: `
    <li>{{ name }}<div class="mn-progress-bar"><div class="progress" [style.width.%]="animatedProgress"></div></div></li>
  `
})
export class SkillComponent implements OnInit {
  @Input() name: string = '';
  @Input() progress: number = 0;
  animatedProgress: number = 0;

  ngOnInit() {
    setTimeout(() => {
      this.animatedProgress = this.progress;
    }, 350);
  }
}

import { Component } from '@angular/core';
import { SkillItemComponent } from './app-skill.component';
import { ExperienceItemComponent } from './experience-item.component';

@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [SkillItemComponent, ExperienceItemComponent],
  templateUrl: './main-info.component.html'
})
export class MainInfoComponent {}

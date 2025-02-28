import { Component } from '@angular/core';
import { ReferenceComponent } from './education-item.component';
import { SkillComponent } from '../main-info/app-skill.component';
import {ExperienceItemComponent} from '../main-info/experience-item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SkillComponent, ReferenceComponent, ExperienceItemComponent],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent { }

import {Component, OnInit} from '@angular/core';
import { ReferenceComponent } from './education-item.component';
import { SkillComponent } from '../main-info/app-skill.component';
import {ExperienceItemComponent} from '../main-info/experience-item.component';
import { InfoService } from '../service/info-service.component';
import {Skill, Reference, Job, Education} from '../service/dto_interfaces';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SkillComponent, ReferenceComponent, ExperienceItemComponent],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  languages: Skill[] =[];
  education: Education[] =[];
  reference: Reference[] =[];

  constructor(private InfoService: InfoService) {}

  ngOnInit(): void {
    this.InfoService.getLanguages().subscribe((data: Skill[]) => {
      this.languages = data;
    });
    this.InfoService.getEducation().subscribe((data: Education[]) => {
      this.education = data;
    });
    this.InfoService.getReference().subscribe((data: Reference[]) => {
      this.reference = data;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import { ReferenceComponent } from './education-item.component';
import { SkillComponent } from '../main-info/app-skill.component';
import {ExperienceItemComponent} from '../main-info/experience-item.component';
import {InfoService} from '../service/info-service.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SkillComponent, ReferenceComponent, ExperienceItemComponent],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  languages: any[] =[];
  education: any[] =[];
  reference: any[] =[];

  constructor(private InfoService: InfoService) {}

  ngOnInit() {
    this.languages = this.InfoService.getLanguages();
    this.education = this.InfoService.getEducation();
    this.reference = this.InfoService.getReference();
  }
}

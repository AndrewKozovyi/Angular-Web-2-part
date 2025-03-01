import {Component, OnInit} from '@angular/core';
import { SkillComponent } from './app-skill.component';
import { ExperienceItemComponent } from './experience-item.component';
import {InfoService} from '../service/info-service.component';

@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [SkillComponent, ExperienceItemComponent],
  templateUrl: './main-info.component.html'
})
export class MainInfoComponent implements OnInit {
  skills: any[] =[];
  hobbies: any[] =[];
  jobs: any[] =[];

  constructor(private InfoService: InfoService) {}

  ngOnInit() {
    this.skills = this.InfoService.getSkills();
    this.hobbies = this.InfoService.getHobbies();
    this.jobs = this.InfoService.getJobs();
  }
}

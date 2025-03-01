import {Component, OnInit} from '@angular/core';
import { SkillComponent } from './app-skill.component';
import { ExperienceItemComponent } from './experience-item.component';
import {InfoService} from '../service/info-service.component';
import { Skill, Job } from '../service/dto_interfaces'

@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [SkillComponent, ExperienceItemComponent],
  templateUrl: './main-info.component.html'
})
export class MainInfoComponent implements OnInit {
  skills: Skill[] =[];
  hobbies: Skill[] =[];
  jobs: Job[] =[];

  constructor(private InfoService: InfoService) {}

  ngOnInit(): void {
    this.InfoService.getSkills().subscribe((data: Skill[]) => {
      this.skills = data;
    });
    this.InfoService.getHobbies().subscribe((data: Skill[]) => {
      this.hobbies = data;
    });
    this.InfoService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }
}

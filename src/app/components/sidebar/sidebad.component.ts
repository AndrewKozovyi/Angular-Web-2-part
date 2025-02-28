import { Component } from '@angular/core';
import { LanguageComponent } from './app-language.component';
import { EducationItemComponent } from './app-reference.component';
import { ReferenceComponent } from './education-item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LanguageComponent, EducationItemComponent, ReferenceComponent],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent { }

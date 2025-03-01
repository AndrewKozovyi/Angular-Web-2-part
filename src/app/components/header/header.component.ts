import {Component, OnInit} from '@angular/core';
import { ContactItemComponent } from './contact-item.component';
import {InfoService} from '../service/info-service.component';
import { Contacts } from '../service/dto_interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  contacts: Contacts[]=[]

  constructor(private InfoService: InfoService) {}

  ngOnInit(): void {
    this.InfoService.getContacts().subscribe((data: Contacts[]) => {
      this.contacts = data;
    });
  }
}

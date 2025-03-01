import {Component, OnInit} from '@angular/core';
import { ContactItemComponent } from './contact-item.component';
import {InfoService} from '../service/info-service.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  contacts: any[]=[]

  constructor(private ContactService: InfoService) {}

  ngOnInit() {
    this.contacts = this.ContactService.getContacts();
  }
}

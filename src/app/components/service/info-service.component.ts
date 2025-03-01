import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Skill, Job, Contacts, Reference, Education} from './dto_interfaces'

@Injectable({
  providedIn: 'root'
})

export class InfoService {
  private apiUrl = 'http://localhost:1488';

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/languages`);
  }

  getSkills() {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills`);
  };

  getHobbies(){
    return this.http.get<Skill[]>(`${this.apiUrl}/hobbies`);
  };

  getJobs(){
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  };

  getEducation() {
    return this.http.get<Education[]>(`${this.apiUrl}/education`);
  };

  getReference(){
    return this.http.get<Reference[]>(`${this.apiUrl}/reference`);
  };

  getContacts(){
    return this.http.get<Contacts[]>(`${this.apiUrl}/contacts`);
  };
}

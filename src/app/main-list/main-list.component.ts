import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CONTACTS } from './../mock-contacts';
import { ContactListService } from './../contact-list.service';
import { Contact } from '../contact';
import { HeaderTitleService } from '../header/header-title.service';


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  company: string;


  links = [
    {
      name: 'ETTEVÕTTED',
      path: '/company-list'
    },
    {
      name: 'RIIGID',
      path: '/country-list'
    },
    {
      name: 'LINNAD',
      path: '/city-list'
    },
    {
      name: 'KALKULAATOR',
      path: '/calculator'
    }
  ];



  /*showCompanies(): string {
    console.log(this.company);
    return this.company = 'Holland';
  }*/


 /* showCompanies(): void {
    this.company = this.contactService.getContacts().find((element) => element.company;
    console.log(this.company);
  }*/
  constructor(private headerTitleService: HeaderTitleService) {}
  ngOnInit() {
    this.headerTitleService.setTitle('Main');
  }
}


/*
  showCompanies(): void {
    this.company = this.contactService.getContacts().find(element => element.company);
    console.log(this.company);
  }

  showCountries(): void {
    this.country = getContacts().find(element => element.country);
  }
}

*/

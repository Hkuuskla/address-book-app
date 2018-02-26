import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../contact-list.service';
import { HeaderTitleService } from '../header/header-title.service';

@Component({
  selector: 'app-country-list-view',
  templateUrl: './country-list-view.component.html',
  styleUrls: ['./country-list-view.component.css']
})
export class CountryListViewComponent implements OnInit {
  countryList$;
  constructor(private contactService: ContactListService, private headerTitleService: HeaderTitleService) { }

  ngOnInit() {
    this.getCountries();
    this.headerTitleService.setTitle('Riigid');
  }

  getCountries() {
    this.countryList$ = this.contactService.getCountries();
  }
}

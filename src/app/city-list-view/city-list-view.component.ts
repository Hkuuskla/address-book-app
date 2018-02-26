import { HeaderTitleService } from './../header/header-title.service';
import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-city-list-view',
  templateUrl: './city-list-view.component.html',
  styleUrls: ['./city-list-view.component.css']
})
export class CityListViewComponent implements OnInit {
  cityList$;


  constructor(private contactService: ContactListService, private headerTitleService: HeaderTitleService) { }

  ngOnInit() {
    this.getCities();
    this.headerTitleService.setTitle('Linnad');
  }

  getCities() {
    this.cityList$ = this.contactService.getCities();
  }
}




import { HeaderTitleService } from './../header/header-title.service';
import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-company-list-view',
  templateUrl: './company-list-view.component.html',
  styleUrls: ['./company-list-view.component.css']
})
export class CompanyListViewComponent implements OnInit {
  companyList$;
  constructor(private contactService: ContactListService, private headerTitleService: HeaderTitleService) { }

  ngOnInit() {
    this.getCompanies();
    this.headerTitleService.setTitle('Ettevõtted');
  }

  getCompanies() {
    this.companyList$ = this.contactService.getCompanies();
  }


}

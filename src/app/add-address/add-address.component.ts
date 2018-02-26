import { HttpClient } from '@angular/common/http';
import { Contact } from './../contact';
import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../contact-list.service';
import { Observable } from 'rxjs/Observable';
import { HeaderTitleService } from '../header/header-title.service';




@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  contact: Contact = {
    id: 0,
    company: '',
    country: '',
    city: '',
    address: ''
  };

  constructor(private contactListService: ContactListService, private headerTitleService: HeaderTitleService) { }

  addContact(contact: Contact): void {
    this.contactListService.addContact(this.contact);
  }

  ngOnInit() {
    this.headerTitleService.setTitle('Lisa kontakt');

  }

}

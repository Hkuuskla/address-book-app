import { HeaderTitleService } from './../header/header-title.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ContactListService } from '../contact-list.service';
import { Contact } from '../contact';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})



export class ContactsComponent implements OnInit {

  contacts$: Contact[];
  contact: string;
  private sub: any;



  constructor(private route: ActivatedRoute,
              private contactService: ContactListService,
              private headerTitleService: HeaderTitleService
              ){}

  ngOnInit() {
    this.getContacts();
    this.headerTitleService.setTitle('Company Name');
   /* const company = this.route.snapshot.params['company'];
    this.contacts.find(function(contact) {
    return contact.company === company;*/
  }


  getContacts() {
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts$ = contacts);

  }

  /*updateCotacts(): void {
    this.contactService.updateContact(this.contact)
    .subscribe(contacts => this.contacts = contacts);
  }*/

  /*deleteContact() {
    this.contactService.deleteContact(this.contacts.id).subscribe();
  }*/



}



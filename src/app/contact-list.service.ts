import { Injectable } from '@angular/core';
import { Contact } from './contact';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ContactListService {

  contact: any;
  private readonly contactsUrl = 'http://localhost:8080/contact';
  company;
  country;
  companies;


  constructor(protected http: HttpClient) { }

  addContact(contact: Contact) {
    this.http.post(this.contactsUrl, contact)
    .subscribe(res => console.log(res));
  }

  getContacts(): Observable<Contact[]> {
    console.log('contacts');
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  updateContact(contact: Contact) {
    this.http.put<Contact[]>(this.contactsUrl, contact);
  }

  deleteContact(id: number): Observable<{}> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete(url);
  }

  getContact(company: string): Observable<Contact> {
    const url = `${this.contactsUrl}/${company}`;
    return this.http.get<Contact>(url);
  }

  getCompanies(): Observable<string[]> {
    const contactList$ = this.getContacts();

    const companyList$ = contactList$.pipe(
      map((contactList: Contact[]) => {
        const companyList = contactList.map((contact: Contact) => {
          return contact.company;
        });

        const companySet = new Set(companyList);
        const uniqueCompanyList = Array.from(companySet);
        return uniqueCompanyList.sort();
      })
    );

    return companyList$;
  }

  getCities(): Observable<string[]> {
    const contactList$ = this.getContacts();

    const cityList$ = contactList$.pipe(
      map((contactList: Contact[]) => {
        const cityList = contactList.map((contact: Contact) => {
          return contact.city;
        });

        const citySet = new Set(cityList);
        const uniqueCityList = Array.from(citySet);
        return uniqueCityList.sort();
      })
    );

    return cityList$;
  }

 getCountries(): Observable<string[]> {
    const contactList$ = this.getContacts();

    const countryList$ = contactList$.pipe(
      map((contactList: Contact[]) => {
        const countryList = contactList.map((contact: Contact) => {
          return contact.country;
        });

        const countrySet = new Set(countryList);
        const uniqueCountryList = Array.from(countrySet);
        return uniqueCountryList.sort();
      })
    );

    return countryList$;
  }

}


import { ContactListService } from './../contact-list.service';
import { HeaderTitleService } from './header-title.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: Observable<string>;
  hasAddButton: Observable<boolean>;

  constructor(private headerTitleService: HeaderTitleService,
              private _location: Location,
              private contactListService: ContactListService) {
   }

  ngOnInit() {
    this.title = this.headerTitleService.title;
   // this.hasAddButton = this.headerTitleService.hasAddButton;


  }

  back(): void {
    this._location.back();
  }

}

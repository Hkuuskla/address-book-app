import { HeaderTitleService } from './header/header-title.service';
import { ConfigService } from './config.service';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContactsComponent } from './contacts/contacts.component';
import { MainListComponent } from './main-list/main-list.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { CompanyListViewComponent } from './company-list-view/company-list-view.component';
import { CountryListViewComponent } from './country-list-view/country-list-view.component';
import { CityListViewComponent } from './city-list-view/city-list-view.component';

import { ContactListService } from './contact-list.service';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MainListComponent,
    CompanyListViewComponent,
    AddAddressComponent,
    CountryListViewComponent,
    CityListViewComponent,
    CalculatorViewComponent,
    HeaderComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContactListService, ConfigService, HeaderTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

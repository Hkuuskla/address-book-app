import { CityListViewComponent } from './city-list-view/city-list-view.component';
import { CompanyListViewComponent } from './company-list-view/company-list-view.component';
import { MainListComponent } from './main-list/main-list.component';
import { AddAddressComponent } from './add-address/add-address.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListViewComponent } from './country-list-view/country-list-view.component';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainListComponent },
  { path: 'add-address', component: AddAddressComponent },
  { path: 'company-list', component: CompanyListViewComponent},
  { path: 'country-list', component: CountryListViewComponent},
  { path: 'city-list', component: CityListViewComponent},
  { path: 'calculator', component: CalculatorViewComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/company/:company', component: ContactsComponent},
  { path: 'contacts/city/:city', component: ContactsComponent},
  { path: 'contacts/country/:country', component: ContactsComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    { enableTracing: true }
  )
 ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

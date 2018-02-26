import { Component, OnInit, Input } from '@angular/core';
import { HeaderTitleService } from './header/header-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private headerTitleService: HeaderTitleService) {}

  ngOnInit() {
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderTitleService {
    public title = new BehaviorSubject('Title');
   // public hasAddButton = new BehaviorSubject<boolean>(false);

setTitle(title) {
    this.title.next(title);
}
/*
showAddButton() {
    this.hasAddButton.next(true);
}

hideAddButton() {
    this.hasAddButton.next(false);
}
*/
constructor() { }

}

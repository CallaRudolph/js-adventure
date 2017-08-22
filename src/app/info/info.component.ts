import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Output() newUserSender = new EventEmitter();

  addUser = false;

  submitForm(name: string, occupation: string, favoriteFood: string, id: number) {
    var newUserToAdd: User = new User(name, occupation, favoriteFood, id);
    this.newUserSender.emit(newUserToAdd);
    this.addUser = false;
  }

  showUserForm() {
    this.addUser = true;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from '../models/user';

@Component({
  selector: 'app-list-users-card',
  templateUrl: './list-users-card.component.html',
  styleUrls: ['./list-users-card.component.css']
})
export class ListUsersCardComponent implements OnInit {
  @Input() listUsers: []
  @Output() openSideBar = new EventEmitter<user>()

  constructor() { }

  ngOnInit(): void { }

  openSidebar(user: user) {
    this.openSideBar.emit(user)
  }

}

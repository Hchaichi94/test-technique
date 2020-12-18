import { Component, OnInit } from '@angular/core';
import { user } from './models/user';
import { ApiUsersService } from './services/api-users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-technique';
  listUsers: user[];
  opened = false
  user: user


  constructor(private ApiUsersService: ApiUsersService) { }

  ngOnInit(): void { }

  openSideBar(user: user) {
    this.user = user
  }

  LoadListUsersFromJson() {
    this.opened = true
    this.ApiUsersService.getUsers().subscribe(data => {
      this.listUsers = data
    })
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson() { }

}

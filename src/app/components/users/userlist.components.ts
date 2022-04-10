import { Component, OnInit } from '@angular/core';
import User from '../../model/User';
import { UserService } from '../../services/User.Service';


@Component({
  selector: 'users-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserListComponent implements OnInit {

    users: User[] = [];
    

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.loadUsersList();
  }

  loadUsersList() {
      let self = this;
      if (self.users.length === 0) {
          self.userService.getUsersList()
          .subscribe(response =>
            self.users = response);
      }
  }
}

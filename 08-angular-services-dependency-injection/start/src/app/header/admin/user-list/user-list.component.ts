import { Component, Inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { userService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // providers: [userService] //! This makes a new instance of the service which results to a Bug
})
export class UserListComponent {
  userList:User[] = []

  constructor(private _userService : userService){
    this.userList = _userService.getAllUsers()
  }

  addUser(user){
        this._userService.onUserClicked(user)
  }
}

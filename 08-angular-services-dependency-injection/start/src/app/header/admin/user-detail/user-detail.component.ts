import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { userService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit{
  user:User
  _userService:any = inject(userService)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._userService.selectedUserDetail.subscribe((data)=>{
      
      this.user = data
      console.log(this.user);
    })
  }
}

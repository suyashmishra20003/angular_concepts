import { Component, Inject } from '@angular/core';
import { userService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers:[userService]
})
export class AdminComponent {

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  constructor(private userService:userService){

  }

  CreateNewUser(){
    /*
*        As we are adding the user in the instance of userService in admin component and we 
*        are  displaying the data from the new instance of userService in the user-list component
!        as both instances are not same data is not display whis a Bug
    */

    
    this.userService.CreateUser(this.name,this.gender,this.subType,this.status );
    this.name = ''
    this.gender = 'Male'
    this.subType = 'Yearly'
    this.status = 'Active'
  }
}
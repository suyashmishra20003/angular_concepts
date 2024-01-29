import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})

export class AuthService {
    isLogged:boolean = false

    constructor(
        private _userService:UserService
    ){}

    login(username: string, password: string) {
        // Find the user with the given username and password
        let user = this._userService.users.find(
          (item) => item.username === username && item.password === password
        );
        // Update the login status based on the user's existence
        this.isLogged = user !== undefined;
        // Return the user object if found
        return user;
      }

    logOut(){
        this.isLogged = false
    }

    isAuthenticated(){
        return this.isLogged
    }
}
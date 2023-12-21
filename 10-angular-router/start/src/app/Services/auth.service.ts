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

    login(username:string, password:string){
        let user = this._userService.users.find((item)=> item.username === username && item.password === password )
        if (user === undefined) {
            this.isLogged = false
        }else{
            this.isLogged = true
        }
        return user
    }

    logOut(){
        this.isLogged = false
    }

    isAuthenticated(){
        return this.isLogged
    }
}
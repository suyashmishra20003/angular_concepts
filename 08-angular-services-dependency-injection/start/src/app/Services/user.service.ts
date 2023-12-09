import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./loggerService";

//* Use @Injectable in the reciveing service
@Injectable()

export class userService {
    constructor(private logger:LoggerService){

    }
    users : User[] = [
        new User('Suyash Mishra','Male','Yearly','Active'),
        new User('Shikhar Mishra','Male','Yearly','Inactive'),
        new User('Arun Kumar Mishra','Male','Monthly','Active'),
        new User('Shraddha Mishra','Female','Monthly','Inactibve'),
    ];

    getAllUsers(){
        return this.users;
    }

    CreateUser(name:string,gender:string,subType:string,status:string){
        let user = new User(name,gender,subType,status)
        this.users.push(user)
        // const logger = new LoggerService() //! This is tightly coupled
        this.logger.logMessage(name,status)
    }
}
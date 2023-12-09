export class LoggerService {
    logMessage(name:string,status:string){
        console.log('Logger service is called');
        console.log(`A new user with name ${name} with status ${status} is added to user list`);
    }
}
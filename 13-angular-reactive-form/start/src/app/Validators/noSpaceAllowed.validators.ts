import { FormControl } from "@angular/forms";


export class CustomValidators{
    static noSpaceAllowed (control: FormControl)  {
        if (control.value != null && control.value.indexOf(' ') != -1) {
            return Promise.resolve({ noSpaceAllowed: true })
        } else {
            return Promise.resolve(null)
        }
    }

    static checkUserName(control:FormControl ){
        return userNameAllowed(control.value)
    }
}



function userNameAllowed(username:string) {
    const takenUserNames = ['suyash', 'shikhar', 'arun']

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (takenUserNames.includes(username)) {
                resolve({checkUserName:true})
            } else {
                resolve(null)
            }
        }, 5000);
    })
}
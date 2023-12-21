
import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router"


export const CanActivateFn = ()=>{
    const authService  = inject(AuthService)
    const router  = inject(Router)
    if(authService.isAuthenticated()){
        return true;
    } else{
        router.navigate(['/Login'])
        return false;
    }
}

export const CanActivateChildFn = () => {
    return CanActivateFn();
}
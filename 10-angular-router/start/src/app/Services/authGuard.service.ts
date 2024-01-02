import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";

export interface iDeactivateComponent {
    canExit: ()=> boolean | Observable<boolean> | Promise<boolean>
}

@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<iDeactivateComponent> { //! This is depricated and is used only on versions below 14 
    constructor( 
        private authService:AuthService,
        private router:Router
    ){ } 
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let isUserLogged =  this.authService.isAuthenticated()
        if (isUserLogged) {
            return true;
        } else {
            this.router.navigate(['/Login'])
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return  this.canActivate(childRoute,state)
    }

    canDeactivate(component: iDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canExit()
    }

}
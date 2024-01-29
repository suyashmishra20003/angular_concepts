
import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router"
import { ContactComponent } from "./contact/contact.component"
import { CourseService } from "./Services/course.service"



export const CanActivateFn = ()=>{
    //* CanActivateFn guard in angular 15 or  above 
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

export const CanDeActivateFn = (comp:ContactComponent) => {
    return comp.canExit()
}

export const resolveCoursesFn = ()=>{
    const courseService  = inject(CourseService)
    return courseService.getAllcourses()
}
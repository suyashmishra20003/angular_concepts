import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuardService } from "./Services/authGuard.service";
import { CanActivateChildFn, CanDeActivateFn } from "./authFunc.guard";

const routes: Routes = [
    {path:'',component:HomeComponent}, //* By Default what page should be loaded first
    // {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'About' , component : AboutComponent },
    {path:'Contact' , component : ContactComponent , canDeactivate:[AuthGuardService]}, //?  Using canDeactivate interface
    // {path:'Contact' , component : ContactComponent , canDeactivate:[CanDeActivateFn(new ContactComponent)]}, //? using function (angular 15 or above)
    {path:'Courses' , component : CoursesComponent },
    // {path:'Courses/Course/:id' , component : CourseDetailComponent }, //todo Route
    {path:'Courses', canActivateChild:[CanActivateChildFn] ,children:[ //todo Protects all child routes
      {path:'Course/:id', component:CourseDetailComponent, },
      {path:'Contact', component:ContactComponent, },
      {path:'Checkout', component:CheckoutComponent},
      // {path:'Checkout', component:CheckoutComponent, canActivate:[AuthGuardService]}, //?  Using canActivate interface
      // {path:'Checkout', component:CheckoutComponent, canActivate:[CanActivateFn]}, //?  Using canActivate function

    ]},
    {path:'Login' , component : LoginComponent },
    {path: '**' , component:NotFoundComponent} //*  Using wildcard if no path is matched. Fallback mechanism if no path is matched
  ]
  


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class RoutingModule{}
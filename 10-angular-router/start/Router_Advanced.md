# Using Fragments in Route
A fragment in a route is a link which jumps to a section or a content in the HTML page, which contains the ID mentioned in the fragment. A fragment after a `#` sign.


```
    <a fragment="search"  routerLink="Home"  >SEARCH</a>


URL: http://localhost:4200/Home#Services
```

### Nested Routes
Nested routes in Angular allow you to build a hierarchical structure for your application's navigation, creating parent-child relationships between multiple routes. They offer a powerful way to organize related pages and features, improving navigation clarity and maintainability.


```
  {path:'Courses',children:[
    {path:'Course/:id', component:CourseDetailComponent},
    {path:'Contact', component:ContactComponent},
  ]},


  URL:  http://localhost:4200/Courses/Contact
```

## What is a Route Guard
Angular route guards can be used to control whether the user can navigate to or away from a route based on a given condition

### Why Route Guard
Allowing the users to navigate to all parts of the application is not a good idea. And we need to restrict the user from accessing certain routes, until the user performs a specific action like login to application. So, you can use route guards for following scenario's.

- Restrict a user from accessing a route.
- Ask user to save changes before moving away from view.
- Validating the route parameters before navigating to the route.
- Fetch some data before you display component view of a route.

### Types of Route Guard

### CanActivate
This guard decides if a route can be accessed by a user or not. This guard is useful in the circumstance where the user is not authrized to navigate to the target component.

The Angular CaActivate route guard decides if a route can be activated or not. We use this route guard when we want to check on some condition, before showing the component view to user

#### CanActivate Guard: Angular 14 & Lower versions
- Create a service which inheritsfrom CanActivate interface.
- Implement CanActivate method provided by CanActivate interface.
- Return a boolean value from the CanActivate method based on if the route can be activated or not.
- Assign the service to CanActivate property of route Object.

The common use case where we can use a CanActivate route guard is when we want to protect a route from an unauthorized user. For example, let's say there are some routes which can only be accessed by a loggged in user, we can use CanActivate guard.


```
export class AuthGuardService implements CanActivate{ //! This is depricated and is used only on versions below 14 
    constructor( 
        private authService:AuthService,
        private router:Router
    ){ }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return false ; // If false route to checkout component will not wrork
    }

}
```

```
In Module.ts

{path:'Checkout', component:CheckoutComponent, canActivate:[AuthGuardService]},
```

#### CanActivateChild
This guard decides, if a user can leave a route or not. This guard is useful in case where the user might have pending changes, which was not saved.
The Angular CanActivateChildrote guard runs before we navigate to a child route guard. This guard is very similar to CanActivate route guard and it protects a child route from unauthorized access.

#### CanDeactivate
This guard determines whether a child route can be activated or not.
We can use CanDeactivate route guard to decide if the user can navigate away from a route or not. This route guard is called whenever we try to navigate away from the current route

Example : Safeguarding Data in Document Editors:

A writer is editing a lengthy article in a collaborative text editor.
Guard Implementation:
- Warn about unsaved work if they try to close the browser tab or move to a different page.
- Prevent accidental loss of content and ensure collaboration continuity.

#### Resolve
This guard delays the activation of the route until some tasks are complete. You can use the guard to pre-fetch the data from the backend API, before activating the route.


#### CanLoad
The CanLoad Guard prevents the loading of the lazy Loaded Module. We generally use this guard when we do not want to unauthorized user to be able to even see the source code of the module.


### Creating an Auth Service

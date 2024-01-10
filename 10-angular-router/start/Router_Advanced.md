# Using Fragments in Route
A fragment in a route is a link which jumps to a section or a content in the HTML page, which contains the ID mentioned in the fragment. A fragment after a `#` sign.


```html
<a fragment="search"  routerLink="Home"  >SEARCH</a>
URL: http://localhost:4200/Home#Services
```
### Using Fragments in Links
In your components or templates, you can use the `routerLink` & `fragmant` directive to create links with fragments.

```html
<a [routerLink]="['/detail', 1]" fragment="section1">Go to Detail with Fragment</a>
<a [routerLink]="['/detail', 2]" fragment="section2">Go to Detail with Another Fragment</a>
```

### Navigating to Fragments

In the component that handles the detail view, you can use the ActivatedRoute service to access the fragment.

```ts
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      console.log('Fragment:', fragment);
      // Do something based on the fragment (e.g., scroll to a section)
    });
  }
}
```

# Nested Routes

In Angular, nested routes refer to the practice of defining child routes within a parent route. This is a powerful feature of the Angular Router that allows you to organize your application's routing structure in a hierarchical manner.



```ts
 const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    children: [
      { path: 'details', component: ProductDetailComponent },
      { path: 'reviews', component: ProductReviewComponent },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

  URL:  http://localhost:4200/Courses/Contact
```

- `/products` : Displays the list of products.
- `/products/123` : Displays details for the product with ID 123.
- `/products/123/details` : Displays details for the product with ID 123.
- `/products/123/reviews` : Displays reviews for the product with ID 123.
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


```ts
In Module.ts

{path:'Checkout', component:CheckoutComponent, canActivate:[AuthGuardService]},

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

#### Angular 15 or above
```ts
// authFunc.guard.ts


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
```


### CanActivateChild
This guard decides, if a user can leave a route or not. This guard is useful in case where the user might have pending changes, which was not saved.
The Angular CanActivateChildrote guard runs before we navigate to a child route guard. This guard is very similar to CanActivate route guard and it protects a child route from unauthorized access.

### CanDeactivate
This guard determines whether a child route can be activated or not.
We can use CanDeactivate route guard to decide if the user can navigate away from a route or not. This route guard is called whenever we try to navigate away from the current route

Example : Safeguarding Data in Document Editors:

A writer is editing a lengthy article in a collaborative text editor.
Guard Implementation:
- Warn about unsaved work if they try to close the browser tab or move to a different page.
- Prevent accidental loss of content and ensure collaboration continuity.

##### Angular 14 or less
```ts
// auth-guard.service.ts
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<ContactComponent> { //! This is depricated and is used only on versions below 14 

  
    canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canExit()
    }

}


// routing.module.ts
{path:'Contact' , component : ContactComponent , canDeactivate:[AuthGuardService]},

```
##### Angular 15 or above
```ts
// authFunc.guard.ts

export const CanDeActivateFn = (comp:any) => {
    return comp.canExit()
}

// routing.module.ts
{path:'Contact' , component : ContactComponent , canDeactivate:[CanDeActivateFn(ContactComponent)]},
```



### Resolve
This guard delays the activation of the route until some tasks are complete. You can use the guard to pre-fetch the data from the backend API, before activating the route.

Resolve route guard in Angular can be used when we wnat to load some data before we navigate to route.


#### CanLoad
The CanLoad Guard prevents the loading of the lazy Loaded Module. We generally use this guard when we do not want to unauthorized user to be able to even see the source code of the module.


### Creating an Auth Service

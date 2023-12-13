# What is Routing

Routing allows us to navigate from one part of our app to another part. In Angular, using routing, we can move from view of one component to view of another component.

To Implement routing in angular, we use built in `@angular/router` module

# How to define Routes

-  Create a new route using **Routes** array and define some route objects inside that array

- Register the route using `RouterModule.forRoot(routeName)`

- Use `<router-outlet></router-outlet>` where you want to render the view of specified route component
```
const routes: Routes = [
  {path:'',component:HomeComponent}, //* By Default what page should be loaded first
  // {path:'', redirectTo:'Home', pathMatch:'full'}, // Redirects path 
  {path:'Home',component:HomeComponent},
  {path:'About' , component : AboutComponent },
  {path:'Contact' , component : ContactComponent },
  {path:'Courses' , component : CoursesComponent },
  {path: '**' , component:NotFoundComponent} //*  Using wildcard if no path is matched. Fallback mechanism if no path is matched
]

imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)  // Router Module
  ],
```

In Angular routing, forRoot and forChild are two static methods used to register routes with the RouterModule. They serve different purposes:

### forRoot:

- Purpose: Initializes the Router service and registers global routes for the entire application.
- Location: Used only in the main AppModule.
- Functionality:
    - Creates a single instance of the Router service.
    - Registers the provided routes with the Router service.
    - Registers the Router service with the dependency injector.


### forChild:

- Purpose: Registers additional routes specific to a feature module.
- Location: Used in feature modules (modules other than the AppModule).
- Functionality:
  - Registers the provided routes with the existing Router service.
  - Does not create a new instance of the Router service.
  - Does not register any additional services with the dependency       injector.


#### Key Points for forRoot and forChild
- Each application can only have one forRoot call, but it can have multiple forChild calls.
- You should use forChild for all routes within a feature module to prevent them from clashing with global routes.
- If you are using lazy loading, the forChild method will be called when the feature module is loaded.
- The forRoot method should be called before any forChild methods.
- 
### redirectTo

- Purpose: Defines the URL that the router should navigate to if the path does not match any other route.
- Property type: String
- Value: A relative or absolute URL path.
- Example: `{ path: '', redirectTo: '/home' }`

### pathMatch

- Purpose: Defines how the router should match the URL path against the route's path.
- Property type: String
- Possible values:
  - `full` : Matches the entire URL path.
  - `prefix` : Matches the beginning of the URL path.
Default value: `prefix`
Example: `{ path: 'products', pathMatch: 'full' }`

### Wild Card Route
A wild card route is the route which matches every route path. In angular, the wild card route is specified using `**` signs

**Note** : A wild card route must be specified at hte end of all defined routes



# List of bard Questions

- difference between router forroot and forchild
- redirectTo property and pathMatch in angular routes
- using ** if no path is matched in the routes


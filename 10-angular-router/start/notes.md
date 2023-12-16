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
- Default value: `prefix`
- Example: `{ path: 'products', pathMatch: 'full' }`

### Wild Card Route
A wild card route is the route which matches every route path. In angular, the wild card route is specified using `**` signs

**Note** : A wild card route must be specified at hte end of all defined routes

### RouterLink Directive
The `RouterLink` is  a directive that binds the HTML element to a Route. When the HTML element on which we used the RouterLink is clicked, it will result in navigation to that Route

**Note** : RouterLink directive is an attribute and we can also pass additional parameters to it. 

```
        <a  routerLink="">HOME</a>

```
- routerLink is the directive attribute.
- The value assigned to routerLink is the path of the route you want to navigate to.


### RouterLinkActive Directive
-  The `routerLinkActive` is a directive for adding or removing classes from the HTML element that is bound to **RouteLink**.
- Using `routerLinkActive` directive, we can toggle CSS classes for active route link based on the current touter state.
- The main use case of `routerLinkActive`  directive iss to highlight which route is currently active

```
        <a routerLinkActive="active"  routerLink="">HOME</a>

```
### RouterLinkActiveOptions Directive
- When a child route is active, then all the parent routes are also marked as active. In that case, routeLinkActive directive is applied to the active child route and all its parent routes.
- Using `RouterLinkActiveOptions` directive, we can set options for RouterLinkActiveOptions directive. One of the options we can set is the exact property which tells how to match the route path for styling the active route.
-  `[routerLinkActiveOptions]="{exact:true}"`
  ```
        <a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="">HOME</a>

  ```

## Relative Vs Absolute Route paths

In Angular routing, both absolute and relative paths are used to define routes and navigate between components. However, they differ in their reference point and how they are interpreted by the router.

### Absolute Paths

 - Definition: An absolute path starts with the root directory of the application (represented by '/') and specifies the entire path to the target route.
 - When we use a slash (`/`) before the router link path, in that case it uses absolute path and the path is directly appended to root url
- Example: 
  ```
  <a routerLink="/About"  >About</a>

  URL: localhost:4200/About
  ```
- Benefits:
    - Easier to understand and maintain, especially for complex route structures.
    - Provides a clear reference point regardless of the current location in the application.
    - Useful when you need to navigate to a specific route independent of the current context.


### Relative Paths

- Definition: A relative path defines the target route relative to the current location in the application structure.
- When we use a dot & a slash (./) before the router link path, in that case it uses relative path and the path is appeneded to the currently active route.
- When we use (../) before the router link path, in that case it will move on level up and the path will be appended to the parent path.
- Do not include the leading slash.
- Example: ./../products/detail/:id
- Benefits:
    - More concise and less verbose, especially for routes within the same module or component.
    - Improves code maintainability by avoiding repetition of common path segments.
    - Makes the code more adaptable to changes in the overall application structure.

### navigate() Method
Using navigate() method, we can navigate from one route to another programmatically. The navigate method takes an array as an argument and in that array we can specify route segments.

navigate can also be used to navigate to relative routes within the current navigation context.

```
Example:

URL: localhost:4200/Books/Author/101

this._router.navigate(['Books','Author',101]);
```

### navigateByUrl() Method
Using navigateByUrl() method, we can navigate from one route to another programmatically. The **navigateByUrl** method takes a string value as an argument and that string value should contain all the route segments.

```
Example:

URL: localhost:4200/Books/Author/101

this._router.navigateByUrl('/Books/Author/101');
```

When we define anything with navigate or navigateByUrl method by default it is an Absolute path

### Route Parameter
The route parameter are the dynamic part of the route whose value can change. These parameters provides a way to pass extra information to a given route.
```
localhost:4200/Books/:routeParameter
```
#### Examples of route parameters

- `/products/:id` - Captures the product ID dynamically.
- `/users/:username/posts` - Captures both the username and the "posts" section.
- `/search/:query` - Captures the search query entered by the user.

# How to use route parameters
Define the parameter in your route path:

```
{ path: 'products/:id', component: ProductDetailComponent },
```
Access the parameter value in your component:
```
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const productId = this.route.params.get('id'); // Get the value of 'id' parameter
  // Use productId to fetch data or perform other actions
}
```

### ActivatedRoute 
In Angular routing, ActivatedRoute is a service that provides access to information about the currently activated route. It acts as a bridge between your component and the router, offering valuable data about the current navigation state.
ow to use ActivatedRoute:

Inject ActivatedRoute into your component constructor:
```
constructor(private route: ActivatedRoute) {}
```
Access route information:
- Use `route.params` to access route parameters.
- Use `route.data` to access the route data object.
- Use `route.snapshot` to get a snapshot of the current route state.

React to route changes:
- Use the `route.paramMap` observable to listen for changes in route parameters.
- Use the `route.data.subscribe` method to react to changes in route data.

### Snapshot property
The snapshot property contains the current value of the route. If the value of the route parameter changes after we have retrieved the value of route, that change will not get captured



```
this.activeRoute.snapshot.paramMap.get('id')
```

### Using Observable to retieve Route Parameter
- By subscribing to the paramMap observable  (or to params observable), you will gat a notification when the value changes. Hence, you can retrieve the latest value of the parameter and update the component accordingly.

- Using Observables to retrieve route parameters is a more robust and efficient approach compared to the snapshot method. It offers greater flexibility and reactivity for handling dynamic route changes and data updates in your Angular application.


```
 this.activeRoute.paramMap.subscribe((data)=>{
      this.courseId = Number( data.get('id'))
      this.selectedCourse = this._courseService.courses.find((course)=>{
        return course.id === this.courseId
      })
    })
```
#### Unsubscribing for memory management
- Unsubscribing ensures proper resource management.
- Remember to unsubscribe from the Observable when the component is destroyed to avoid memory leaks. You can achieve this using the ngOnDestroy lifecycle hook:
```
ngOnDestroy(): void {
  this.courseId$.unsubscribe(); // Unsubscribe from the ID Observable
}
```

# Using Query String in Route
Query Strings are the optional data that we cannpass to a component through a route. These query string are added at the end of the route after a `?`
```
 localhost:4200/Books/Author?name=stefen-king
 localhost:4200/Products/product?id=12345&name=iphone

```



# List of bard Questions

- difference between router forroot and forchild
- redirectTo property and pathMatch in angular routes
- using ** if no path is matched in the routes
- what is routerLink directive in angular
- what is RouterLinkActive directive in angular routing
- what is RouterLinkActiveOptions directive in angular routing
- Difference between absolute and relative paths in angular
- What does navigate() method in angular routing ?
- What does navigateByUrl() method in angular routing ?
- What is ActivatedRoute in Angular routing
- Using Observable to retieve Route Parameter 
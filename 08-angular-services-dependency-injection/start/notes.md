# Angular Services

A service in Angular is reusable TypeScript class that can be used in multiple components across our Angular application

To generate a service use 
`ng g s service-name`. 

`Syntax`
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class serviceName {
  constructor() { }
}
```

we can  inject service by 

```
constructor( private _serviceName:ServiceName ){

}
```

OR

```
_serviceName:any = inject(ServiceName)
```


- We can also use services to communicate between two non-related components in Angular
- We can also use a service without a `@Injectable` decorator because service is just a simple ts class
- But without the decorator we cannot inject another service inside a service. 

# Injecting service with new keyword (Not recommended)


In Angular, it is recommended to inject services through the constructor or the `@Inject` decorator instead of using the `new` keyword. This is because using the new keyword creates a new instance of the service each time, which can lead to several disadvantages:

Disadvantages of using new keyword for injecting services in Angular:

- **Performance issues:** Creating new instances of services frequently can impact performance, especially for complex services with heavy initialization or data fetching processes.
- **Memory leaks:** If you forget to dispose of the service instance, it can lead to memory leaks, especially in long-running applications.
- **State inconsistencies:** Services are designed to maintain a centralized state. Creating multiple instances can lead to inconsistent data across different parts of the application.
- **Dependency Injection violation:** The core principle of Angular is dependency injection. Bypassing it by using new can break the dependency management and lead to difficulties in testing and debugging.
- **Difficulty in singleton behavior:** Services are singletons by default, meaning only one instance exists throughout the application. Using new negates this behavior, making it difficult to enforce consistent state management.
  

# Tight Coupling
Tight coupling in Angular services occurs when a service is heavily dependent on another service or component. This can lead to several issues, including:
- **Reduced flexibility:** Tightly coupled services are difficult to reuse in different parts of the application.
- **Increased complexity:** A change in one service can require changes in other related services, making the code base harder to maintain.
- **Testing difficulties:** Tight coupling can make it difficult to test individual services in isolation.
- **Performance issues:** Tightly coupled services can lead to performance bottlenecks due to unnecessary dependencies.


# Dependency Injection (DI)
A **dependency** is a relationship between two software components where one component relies on the other component to work properly.

**Dependecy Injection (DI)** is a technique using which a class receives its depenencies from an external source rather than creating them itself.

- Dependency injection or DI keeps the flexible, testable and mutable.
- Classes can inherit external logic without knowing how to create it.
- Dependency injection benefits components, directives and pipes.

# Hierarchical Dependency Injection
- When we provide a service on multiple components, each component get its own instance of that service
- Child component provider overrides the instance if component provider.

When we provide a dependency on a component, the same instance of that dependency is injected in component class and all its child components and their child components. This is called as **hierarchichal injection**

# Dependency Override 
When we provide a dependency on a component and we also provide a dependency on its child component, child component dependency instance will override its parent component dependency instance 

# Dependency Injection on Root Component
When we provide on root component, same instance of that dependency is injected to all components, directives and services. To porvide the service in the root component, Just provide the service in the app component. Form this the service instance will be provided in all components

# Module Injector
We can also inject a service from Module class. In this case instance of the dependency will be available throughout the Angular application (all components, directives and services) . In this way we implement singleton pattern where a single instance is shared throughout the application

# @Injectable() decorator 
 `@Injectible()` decorator tells angular that now something can be injected in the component or service class.


# Injecting Service into Another Service
- It is important to understand that we dont need to use this decorator on the service which we want to inject.
- Use this decorator on receiving service.
- best way to provide a service is in the module class
- Nowadays it is recommended to decorate @Injectible() in every service, This does not affect any functionality of the service.

Here's an example of injecting a service into another service in Angular:

Service A:

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceA {
  constructor() {}

  getData(): string {
    return 'This is data from ServiceA';
  }
}
```
Service B:

```
import { Injectable } from '@angular/core';
import { ServiceA } from './service-a'; // Import ServiceA

@Injectable({
  providedIn: 'root',
})
export class ServiceB {
  constructor(private serviceA: ServiceA) {} // Inject ServiceA

  processData(): string {
    const data = this.serviceA.getData(); // Use ServiceA's method
    return `Processed data: ${data}`;
  }
}
```

### Explanation

- Service A: This service defines a `getData` method that returns a string.
- Service B: This service imports the `ServiceA` class and injects it into its constructor using the `@Injectable` decorator.
- Injection: The `serviceA` parameter in the constructor of ServiceB is automatically injected by Angular with an instance of `ServiceA`.
- Method access: In the processData method of `ServiceB`, we access the getData method of the injected `serviceA` instance using the `serviceA` property.
- This is a simple example, but it demonstrates the basic concept of how to inject services into each other in Angular. You can inject any service that has been declared with the `@Injectable` decorator.

Here are some additional points to note:

- You can inject multiple services into a single service's constructor.
- You can inject services into components and directives in the same way.
- The `providedIn` property of the @Injectable decorator determines the scope of the service.

# Angular Injection Token
 
In Angular, injection tokens are unique identifiers used by the dependency injection system to resolve dependencies. They serve as a decoupling mechanism between the provider and the consumer of a dependency. Instead of directly injecting the concrete implementation of a dependency, you inject the token, allowing for more flexibility and testability.

Here's a breakdown of what injection tokens are and how they work:

### Benefits of Injection Tokens:

- Decoupling: Injection tokens decouple the consumer of a dependency from its concrete implementation. This allows you to swap out the implementation without affecting the consumer code.
- Flexibility: You can use the same token to provide different implementations of a dependency in different contexts. This promotes modularity and reusability.
- Testability: Injection tokens make it easier to mock and test dependencies during unit testing.
- Type Safety: Injection tokens provide type safety for injected dependencies.


### Types of Injection Tokens:

Class Injection Token: Represents a class itself. You can use it to inject an instance of the class.
String Injection Token: Represents a string identifier. You can use it to associate arbitrary values with the token.
Opaque Injection Token: Represents an opaque value. You can use it to inject objects that are not directly constructible.
Example of Injection Token:

Imagine you have a service called MyService that implements two different interfaces: DataService and LoggerService. You want to inject the MyService instance into different components, but sometimes you need only the DataService functionality and sometimes only the LoggerService functionality.

Here's how you can use injection tokens to achieve this:

- 1. Define Injection Tokens:

```
const DATA_SERVICE_TOKEN = new InjectionToken<DataService>('DataService');
const LOGGER_SERVICE_TOKEN = new InjectionToken<LoggerService>('LoggerService');
```


- 2. Provide Different Implementations:
```
@Component({
  providers: [
    { provide: MyService, useClass: MyService },
    { provide: DATA_SERVICE_TOKEN, useExisting: MyService },
    { provide: LOGGER_SERVICE_TOKEN, useExisting: MyService },
  ],
})
export class MyComponent {}
```


1. Inject Dependencies:

```
constructor(
  @Inject(DATA_SERVICE_TOKEN) private dataService: DataService,
  @Inject(LOGGER_SERVICE_TOKEN) private loggerService: LoggerService,
) {}
```

In this example, you can inject the MyService instance into different components using the appropriate injection token. This allows you to access the specific functionality required in each context.

### Additional Benefits:

Reduces Code Duplication: By using injection tokens, you can avoid duplicating code that creates and configures service instances.
Improves Code Readability: Injection tokens make your code more readable by decoupling dependencies from their implementations.
Enables Dynamic Dependency Resolution: You can use injection tokens to dynamically resolve dependencies based on specific criteria.
Overall, injection tokens are a powerful tool in Angular's dependency injection system. They provide flexibility, decoupling, and testability, leading to clean, maintainable, and reusable code.
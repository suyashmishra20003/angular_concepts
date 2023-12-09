## Angular Services

A service in Angular is reusable TypeScript class that can be used in multiple components across our Angular application

To generate a aservice use 
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

- We can also use services to communicate between two non-related components in Angular
- We can also use a service without a `@Injectable` decorator because service is just a simple ts class
- But without the decorator we have to use the `new` keyword to inject the service keyyword inside the selected component.

## Injecting service with new keyword (Not recommended)


In Angular, it is recommended to inject services through the constructor or the `@Inject` decorator instead of using the `new` keyword. This is because using the new keyword creates a new instance of the service each time, which can lead to several disadvantages:

Disadvantages of using new keyword for injecting services in Angular:

- **Performance issues:** Creating new instances of services frequently can impact performance, especially for complex services with heavy initialization or data fetching processes.
- **Memory leaks:** If you forget to dispose of the service instance, it can lead to memory leaks, especially in long-running applications.
- **State inconsistencies:** Services are designed to maintain a centralized state. Creating multiple instances can lead to inconsistent data across different parts of the application.
- **Dependency Injection violation:** The core principle of Angular is dependency injection. Bypassing it by using new can break the dependency management and lead to difficulties in testing and debugging.
- **Difficulty in singleton behavior:** Services are singletons by default, meaning only one instance exists throughout the application. Using new negates this behavior, making it difficult to enforce consistent state management.
  

## Tight Coupling
Tight coupling in Angular services occurs when a service is heavily dependent on another service or component. This can lead to several issues, including:
- **Reduced flexibility:** Tightly coupled services are difficult to reuse in different parts of the application.
- **Increased complexity:** A change in one service can require changes in other related services, making the code base harder to maintain.
- **Testing difficulties:** Tight coupling can make it difficult to test individual services in isolation.
- **Performance issues:** Tightly coupled services can lead to performance bottlenecks due to unnecessary dependencies.


## Dependency Injection (DI)
A **dependency** is a relationship between two software components where one component relies on the other component to work properly.

**Dependecy Injection (DI)** is a technique using which a class receives its depenencies from an external source rather than creating them itself.

- Dependency injection or DI keeps the flexible, testable and mutable.
- Classes can inherit external logic without knowing how to create it.
- Dependency injection benefits components, directives and pipes.

## Hierarchical Dependency Injection
- When we provide a service on multiple components, each component get its own instance of that service
- Child component provider overrides the instance if component provider.

When we provide a dependency on a component, the same instance of that dependency is injected in component class and all its child components and their child components. This is called as **hierarchichal injection**

## Dependency Override 
When we provide a dependency on a component and we also provide a dependency on its child component, child component dependency instance will override its parent component dependency instance 

## Dependency Injection on Root Component
When we provide on root component, same instance of that dependency is injected to all components, directives and services. To porvide the service in the root component, Just provide the service in the app component. Form this the service instance will be provided in all components

## Module Injector
We can also inject a service from Module class. In this case instance of the dependency will be available throughout the Angular application (all components, directives and services) . In this way we implement singleton pattern where a single instance is shared throughout the application

## Injecting Service into Another Service


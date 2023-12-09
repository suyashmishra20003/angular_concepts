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
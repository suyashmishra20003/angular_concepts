# Angular Modules
- **Purpose**: Angular modules help in organizing an application by grouping related components, directives, pipes, and services. This modular approach promotes better maintainability and reusability.
- **@NgModule Decorator:** The @NgModule decorator is used to define an Angular module. It takes a metadata object that describes how to compile the module and its components.

```ts
// header.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent  // Components, directives, and pipes that belong to this module
  ],
  imports: [
    CommonModule  // Importing other necessary modules
  ],
  providers: [],  // Services that belong to this module
  exports: [
    HeaderComponent  // Exporting components to make them available to other modules
  ]
})
export class HeaderModule { }

```

## Usage Notes
- **Feature Modules:** Used to organize related components, services, directives, and pipes.
Core Module: Contains singleton services used across the entire application.
- **Shared Module:** Contains common components, directives, and pipes used by multiple modules.
Conclusion
- Angular modules are essential for organizing an application into modular and maintainable blocks. The @NgModule decorator provides a structured way to define these modules, making it easier to manage dependencies and promote reusability.
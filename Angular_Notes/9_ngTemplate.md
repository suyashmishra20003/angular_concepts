# ng-template

In Angular, ng-template is a powerful ***directive*** that allows you to define template content that is not rendered by default but can be injected or projected into other parts of your application dynamically. This enables you to create reusable UI components, enhance code organization, and manage conditional rendering effectively.
- ng-container is a special **element** while a template is a **directive**
## Key Characteristics

- Creates a template that remains hidden initially (no content displayed in the DOM).
- Can be associated with a template reference variable using `#templateName`.
- Provides flexibility for various use cases:
  - Conditional Rendering: Use structural directives like *ngIf or *ngSwitch to display the template based on conditions.
  - Content Projection: Project the template content into another component using the ng-content directive.
  - Customizing Components: Create reusable UI components with embedded ng-templates for dynamic content.
  - Creating DOM References: Use ViewContainerRef injected into the component to manipulate the DOM where the template is projected.
- `ngTemplateOutlet` is a powerful directive that allows you to dynamically render a template within the component's content.
- Instead of embedding the template statically in your HTML, you can define it separately and then use `ngTemplateOutlet` to display it based on certain conditions or data
  
### Example (Conditional Rendering)

```html
<h2>Learn NG Template</h2>
<ng-template #myTemplate>
  <h3>This is a template</h3>
  <p>This is an example paragraph to understand ng-template</p>
</ng-template>

<!--ngTemplateOutlet Directive-->
<ng-container *ngTemplateOutlet="myTemplate"></ng-container>
<div *ngTemplateOutlet="myTemplate"></div>
```

## Advantages of Using ng-template

- Promotes code reusability and modularity.
- Improves application maintainability by separating template logic.
- Enables dynamic UI interactions and conditional rendering.
- Enhances flexibility and control over content display.

## Best Practices

- Use ng-template strategically for appropriate use cases.
- Prioritize clarity and organization when defining templates.
- Consider performance implications when dealing with complex conditional rendering or content projection.
- Explore complementary techniques like components and services for advanced use cases.
- By effectively leveraging ng-template, you can create well-structured, reusable, and performant Angular applications that meet your UI requirements seamlessly.


## Difference Between ng-template and ng-container in Angular

Both ng-template and ng-container are Angular directives used for different purposes in the template. Here's a detailed explanation of their differences, use cases, and examples:

### ng-template
- Purpose: ng-template is used to define template fragments. These fragments are not rendered until they are explicitly referenced and used.
- Rendering: The content inside an ng-template is not displayed by default. It must be instantiated using a directive such as ngTemplateOutlet.
- Use Case: Useful for defining reusable templates that can be conditionally or dynamically rendered.

Example:

```html
<ng-template #myTemplate>
  <h1>I am an ng-template</h1>
</ng-template>

<!-- Rendering the template -->
<ng-container [ngTemplateOutlet]="myTemplate"></ng-container>

### ng-container
```
- Purpose: ng-container is a grouping element that doesn't render anything in the DOM. It's used to group elements without adding an extra element to the DOM.
- Rendering: The content inside an ng-container is rendered without any additional wrapping element.
- Use Case: Useful for applying structural directives without adding extra elements to the DOM.

```html
<ng-container *ngIf="isVisible">
  <p>This is visible</p>
</ng-container>
```
## Key Differences

### Rendering:

- ng-template: Does not render any content by itself. It serves as a template definition that must be explicitly instantiated.
- ng-container: Renders its content immediately but does not add any additional elements to the DOM.

### Use Cases:

- ng-template: Used for defining reusable template fragments, which can be instantiated conditionally or dynamically.
- ng-container: Used for grouping elements and applying structural directives without adding extra DOM elements.


## ngTemplateOutletContext 

ngTemplateOutletContext is a directive in Angular used in conjunction with ngTemplateOutlet. It allows you to pass context data to a ng-template when rendering it dynamically. This is useful when you want to reuse a template but display different content based on the data provided.

### Use Case
Imagine you have a reusable template, but you need to pass different data each time it is displayed. You can achieve this with ngTemplateOutlet and ngTemplateOutletContext.

```html
<ng-container *ngTemplateOutlet="myTemplate; context: templateContext"></ng-container>

<ng-template #myTemplate let-message="message" let-name="name">
  <div>
    <p>{{message}}, {{name}}!</p>
  </div>
</ng-template>

<button (click)="setContext('Hello', 'John')">Greet John</button>
<button (click)="setContext('Welcome', 'Jane')">Welcome Jane</button>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  templateContext: { message: string; name: string } = { message: '', name: '' };

  setContext(message: string, name: string) {
    this.templateContext = { message, name };
  }
}
```

### Key Points:
ngTemplateOutletContext is used to pass custom data (context) to a template dynamically.
The let syntax in the template (let-message="message") allows you to define template variables and bind them to the context data.
This approach is especially helpful for reusable templates that need to be rendered with different content depending on the context.
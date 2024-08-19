# ng-template

In Angular, ng-template is a powerful directive that allows you to define template content that is not rendered by default but can be injected or projected into other parts of your application dynamically. This enables you to create reusable UI components, enhance code organization, and manage conditional rendering effectively.

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

### Structural Directives:

- ng-template: Often used with structural directives like *ngIf or *ngFor to define the structure of the content to be rendered.
- ng-container: Often used to apply structural directives to multiple elements without introducing additional elements in the DOM hierarchy.

### Example Comparison

Using ng-template with Structural Directives:

```html
<ng-template [ngIf]="isVisible">
  <p>This is visible</p>
</ng-template>
```

Using ng-container with Structural Directives:

```html
<ng-container *ngIf="isVisible">
  <p>This is visible</p>
</ng-container>
```


Using ng-template for Reusable Templates:

```html
<ng-template #loadingTemplate>
  <div class="spinner">Loading...</div>
</ng-template>

<ng-container *ngIf="isLoading" [ngTemplateOutlet]="loadingTemplate"></ng-container>
```

### Conclusion
- ng-template: Use when you need to define a reusable template fragment that is not immediately rendered but can be instantiated dynamically.
- ng-container: Use when you need to apply structural directives to multiple elements without adding extra nodes to the DOM.
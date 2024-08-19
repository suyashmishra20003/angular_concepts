# Component

- ***`Components are the building blocks of Angular applications, encapsulating the UI logic and allowing for a modular and maintainable code structure.`***
- Angular components are the fundamental building blocks of an Angular application. 
- They are JavaScript/TypeScript classes that include metadata about the component using the @Component decorator. 
- This metadata includes the component's selector, template, and styles, which define how the component is rendered and styled. 
- Components are crucial because they encapsulate both the logic and view, promoting modularity and reusability

## Creating a Component

- Create a TypeScript class & export it.
- Decorate the class with `@Component` decorator.
- Declare the class in main module file.

```ts
import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.scss']
})

export class HeaderComponent {
    title = 'angular-ekart-header';
}
```

In this example, `@Component` decorator is used to define a component with the selector app-header, an external template file header.component.html, and an external stylesheet header.component.css.

- ***selector***: This property defines the HTML selector that identifies the component within a template. It can be a CSS selector or an element name. When Angular encounters this selector in a template, it replaces it with the component's HTML template.
- ***template/templateUrl***: These properties define the HTML template for the component. The `template` property can be used to directly specify an inline HTML template, while the `templateUrl` property is used to specify the path to an external HTML file containing the template.
- ***styles/stylesUrls***: These properties define the CSS styles for the component. The `styles` property can be used to directly specify inline CSS styles, while the `stylesUrls` property is used to specify an array of paths to external CSS files.

## View Template of Component

- In Angular, the view template is the HTML markup that defines the structure of the component's UI. It includes HTML elements, Angular directives, bindings, and other Angular-specific syntax that define how the component should render in the browser.
- In the example provided, the `templateUrl` property is used to specify the path to an external HTML file containing the template. This external HTML file is the view template for the Angular component.

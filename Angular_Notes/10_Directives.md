# `What are Directives in Angular?`

Directives are one of the most important concepts in Angular, In this section, we will see what is a directive and its types and how to create our own directives

## `What is meant by directives in Angular?`

- Directives are classes that add new behavior or modify the existing behavior to the elements in the template.
- Basically directives are used to manipulate the DOM, for example adding/removing the element from DOM or changing the appearance of the DOM elements.

## `Types of directives`

- Component directive
- Structural directive
- Attribute directive

### Component directive

- Components are special directives in Angular. They are the directive with a template
- it is actually showing something in DOM, hence we can say component is also a directive with a template (template or templateUrls).

```ts
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
```

### Structural  directive

Structural directives are used to change the DOM layout by adding and removing DOM elements. It basically changes the structure of the DOM
Examples of structural directives are `ngIf`, `ngFor`, `ngSwitch`.

```txt
*ngIf — adds or removes element from DOM.
*ngFor — renders list of elements on every iteration.

// All structural Directives are preceded by Asterix (*)symbol.
```

### Attribute directive

Attribute directives are used to change the appearance or behavior of an element.
Examples of attributes directives are `ngStyle, ngClass, ngModel`

```txt
    ngStyle — used to apply styles that will change the appearance.
    ngClass — used to apply CSS classes to change the appearance.
```

### `Creating our own Attribute directive`

Creating a custom directive is just like creating an Angular component. To create a custom directive we have to replace `@Component` decorator with `@Directive` decorator.

- Create a class and add `@Directive` decorator to it and pass the object which has selector property (name of the directive)
- To create an attribute directive we need to access the HTML element on which the directive is getting applied, for that we will inject ElementRefdependency using constructor in our class
- Now we have to listen for the hover event on the element, for that we can use HostListener
HostListener listens to the DOM event on the host element. It also provides a handler method to run when that event occurs.
Here the host element is the element where we are applying our directive.
- On the handler method, access the element reference and change the color of the text

```ts
@Directive({
    selector: '[highlight]',
})

export class HighLightDirective {
    constructor(private elREf:ElemntRef){}

    @HostListner('mouseover') onMouseOver(){
        this.elREf.nativeElement.style.color = 'red'
    }
    @HostListner('mouseleave') onMouseOver(){
        this.elREf.nativeElement.style.color = 'black'
    }
}
```

```html
<div highlight>Hover over me!</div>
```

## `Renderer2`

Renderer2 in Angular: Safely Manipulating the DOM

### What is it?

- The Renderer2 class is a utility service in Angular for safe and consistent manipulation of the Document Object Model (DOM).
- It offers an abstraction layer, hiding browser-specific details for better code portability and security.
- It allows us to manipulate the DOM without accessin the DOM elements directly, by providing a layer of abstraction the DOM element and the component code.

### Key Uses

- It Creates, modify, and remove: Elements, attributes, and styles within your component's view.
- Improved security: Less prone to vulnerabilities compared to direct DOM access.
- Examples: Dynamically adding/removing elements, setting attributes and styles, listening for events.
- Prioritize declarative techniques: Directives and template interpolation are often preferred for cleaner and more maintainable code.

## `@HostListner`

- `Purpose`: The @HostListener decorator lets you listen for events emitted by the host element of your Angular component or directive.
- `Triggers Component Logic`: When a specified event occurs on the host element, the decorated method within your component class is executed, allowing your component to react accordingly.
- `DOM Event Handling`: You can use @HostListener to respond to standard DOM events like 'click', 'mouseover', 'keydown', etc.

- `Syntax`:

```ts
@HostListener('click', ['$event'])
onHostElementClick(event: MouseEvent) {
  // Handle the click event here
}
```

- `Flexibility`: The @HostListener decorator gives you access to the original event object for detailed handling within your component's logic.

## `HostBinding`

- Purpose: The @HostBinding decorator allows you to directly connect properties of your component class to properties of the host element (where your component is placed in the template).

- Changes the DOM: It enables you to dynamically change attributes, classes, and styles of the host element based on your component's internal state.

- One-way or Two-way: You can use @HostBinding for one-way data flow (component property -> element property) or for two-way binding with the attribute.

- Use Cases:

  - Dynamically applying CSS classes for styling.
  - Controlling element visibility with the 'hidden' attribute.
  - Setting inline styles.

- Example:

```ts
@HostBinding('class.active') isActive = false; 
```

Here, the CSS class "active" will be added to the host element whenever the isActive property is set to true.

## `How does a structural directive work ?`

In Angular, structural directives profoundly reshape the DOM (Document Object Model) by adding, removing, or manipulating elements. They fundamentally change the layout structure of your template.

### Key Characteristics

- Microsyntax:  Structural directives often employ a unique microsyntax within angle brackets (< >). This syntax offers a shorthand way to apply the directive's logic. Let's consider *ngIf as an example:

```html
<div *ngIf="condition">
    Content to display if condition is true
</div>
```

- `<ng-template> Element`:  Angular internally transforms structural directives into an `<ng-template>` element. The directive's logic and attributes become properties on this element. For example, the above *ngIf snippet might be transformed into something like:

```html
<ng-template [ngIf]="condition">
    Content to display if condition is true
</ng-template>
```

### Examples and Functions

- `*ngIf`: Conditionally adds or removes elements based on an expression.
- `*ngFor`: Iterates over a collection and renders a template for each item.
- `*ngSwitch`: Conditionally displays one of several sub-views based on the value of an expression.

### Key points to remember

- Structural directives change the actual structure of your HTML, unlike attribute directives that only modify the appearance or behavior of existing elements.
- Angular's intelligent rendering system optimizes DOM manipulation by only updating necessary changes when conditions or collections change.
  
## `Custom Structural Directive`

Here is an example where I create a custom strucutral directive

- Injected Services: The following services are injected and used for manipulating the DOM:
  - TemplateRef: Holds a reference to the template associated with the directive.
  - ViewContainerRef: Allows you to manipulate the view hierarchy within the element.

The `set` keyword in combination with the @Input decorator in Angular defines a setter method for an input property. Here's a breakdown of what it does:

- Decorator: The @Input() decorator marks the property as an input property, enabling data flow from the parent component.
- Setter Method: When you use set followed by the property name, it defines a setter method that automatically gets called whenever the property value changes.
- Method Arguments: The setter method typically receives one argument (item in your example), which holds the new value being assigned to the input property.

```html
<p *CustomIf="10 > 7"  >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit, autem incidunt labore explicabo ipsum
</p>
```

```ts
import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[CustomIf]'
})

export class customIfDirective  {
    @Input('CustomIf') set display(condition:boolean){
        if (condition) {
            this.template.createEmbeddedView(this.view)
        } else {
            this.template.clear()   
        }
    }
    //*  Custom structural directive
    constructor(
        //*  Custom structural directive
        private view:TemplateRef<any>,
        private template:ViewContainerRef
    ){}
}
```

## `ngSwitch`

### What is the *ngSwitch directive?

The *ngSwitch directive is a structural directive that lets you conditionally display one of many possible elements within your Angular template. It operates similarly to a JavaScript switch statement (hence the name).

### Basic Strucutre

- `[ngSwitch]="expression"`: Binds an expression to the directive. This expression will be evaluated, and its value will be used for comparison against the ngSwitchCase values.
- `*ngSwitchCase="value"`: Defines matching values for specific elements. Angular will display the element whose *ngSwitchCase value matches the expression evaluated in ngSwitch.
- `*ngSwitchDefault`: Provides a default element to display if none of the *ngSwitchCase values match the expression.

```ts
  tab:string = ''
```

```html
<div [ngSwitch]="tab" >
   <h1 *ngSwitchCase="'son'" >Son</h1>
   <h1 *ngSwitchCase="'brother'" >Brother</h1>
   <h1 *ngSwitchCase="'father'" >Father</h1>
   <h1 *ngSwitchCase="'mother'" >Mother</h1>
   <h1 *ngSwitchDefault >We are Family</h1>
</div>
```

### Use *ngSwitch when

- You need to conditionally display one of several mutually exclusive elements in your template.
- Using a chain of *ngIf directives would result in less readable or repetitive code.

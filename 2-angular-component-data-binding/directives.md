# What are Directives in Angular?

Directives are one of the most important concepts in Angular, In this section, we will see what is a directive and its types and how to create our own directives

## What is meant by directives in Angular?

- Directives are classes that add new behavior or modify the existing behavior to the elements in the template.
- Basically directives are used to manipulate the DOM, for example adding/removing the element from DOM or changing the appearance of the DOM elements.

## Types of directives

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

### Creating our own Attribute directive

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

# ContentChild & ContentChildren

The `@ContentChild` decorator in Angular is used to access the first element or directive matching a specific selector from the projected content of a parent component. In simpler terms, it allows you to reach into the content projected into your component and grab a specific child element or directive.

```html
parent.component.html
<app-child>
    <h2>Some Heading</h2>
    <p #paragraph >This is a paragraph</p>
</app-child>
```

```ts
child.component.html

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('paragraph') paraEl: ElementRef;

  showParaValue(){
    console.log(this.paraEl);
  }
```

## Difference between @ViewChild & @ContentChild

The main difference between @ContentChild and @ViewChild decorators in Angular lies in where they search for elements:

### @ViewChild

- Looks for elements or directives within the component's own template.
- This includes elements directly defined in the template, elements nested within other components, and directives applied to those elements.

### @ContentChild

- Looks for elements or directives projected into the component from a parent component.
- This refers to content inserted using the `<ng-content>` tag and the select attribute to specify which elements should be included.

| Feature | @ViewChild | @ContentChild |
|---|---|---|
| **Scope** | Template of the component | Projected content from parent |
| **Type of elements** | Elements, directives, components within the template | Elements, directives projected using `<ng-content>` |
| **Selectors** | Class, ID, variable name, directive type | Class, ID, variable name, directive type |
| **Access time** | After view initialization | After view initialization |
| **Examples** | Getting a reference to a child component, accessing a specific element within the template | Accessing a title element projected from the parent |

-------

## @ContentChildren

This decorator is uesd to access a reference of all the DOM elements, components or directives from the projected content in the child component class based on a given selector. Gives an `Querylist` of referenced elements.

```html
parent.component.html
<app-child>
    <h2>Some Heading</h2>
    <p #paragraph >This is a paragraph</p>
    <p #paragraph >This is a paragraph 1</p>
    <p #paragraph >This is a paragraph 2</p>
    <p #paragraph >This is a paragraph 3</p>
</app-child>
```

```ts
child.component.html

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChildren('paragraph') paraEls: ElementRef;

  showParaValue(){
    console.log(this.paraEls);
  }
```

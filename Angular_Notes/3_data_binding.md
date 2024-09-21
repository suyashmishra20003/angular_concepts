# Angular Components and Data binding

## CLI Command to generate a Component

```shell
ng g c component-name
```

## Types of Component Selectors

- In Angular, component selectors are used to define how Angular components are identified and utilized within a web application.
- Angular uses a variety of selector types to specify how components are instantiated and included in templates.

### Element Selectors

This is the most common type of selector in Angular. It matches the name of the component's HTML tag.

```ts
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
```

```html
<app-header></app-header>
```

### Attribute Selectors

 Components can also be selected by attribute. This involves wrapping the component selector in square brackets ([]).

```ts
@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
```

```html
<div app-header></div>
```

### Class Selectors

 Components can be selected by CSS class as well. This is similar to attribute selectors but without the square brackets.

```ts
@Component({
  selector: '.app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
```

```html
<div class="app-header"></div>
```

## What is Data Binding in Angular

Data Binding in Angular allows us to communicate between a component class nd its corresponding view template & vice-versa.Communication between Component & it's View template is Data Binding.

Data Binding is of two types :

- One Way Data Binding
- Two Way Data Binding

-------------------------------------------------

## One Way Data Binding

One-way data binding in Angular refers to the flow of data from the component class to the template (view) or vice versa, but not both simultaneously
It  is further divided into two types

### Component to View

Data flow from component to class (TS) View template (HTML).

#### String Interpolation

It is used to just display a piece of data in HTML, such as displaying a title or a name.

String interpolation will not work on Disabled, Hidden, Checked HTML attributes. For that cases we have to use Property Binding

***`{{data}}`***

#### Property binding
  
***`[property] = data`***

Property Binding lets us bind a property of DOM object, for example the hidden property, to some data value. This can let us show or hide a DOM element, or manipulate the DOM in some other way.

#### Difference between an Attribute and Property in HTML

- An ***`Attribute`*** represents the initial value and does not change
- Example: aria-label, aria-hidden etc
- An ***`Property`*** represents the current value and can change

#### Attribute Binding

These attributes when you try to bind them using property binding they will give an error. There you need to bind them using attribute binding.

```html
<input [(ngModel)]="username" [attr.aria-hidden]="" placeholder="Enter your username">
```

### View to Component

Data flow from  View template (HTML) to component class (TS).

- Event Binding ***`(data) = "expression"`***

-------------------------------------------------

### Two Way Data Binding

Two-way data binding in Angular refers to the synchronization of data between the component class and the template (view) in both directions. This means that changes made in the component class are reflected in the template, and changes made in the template are also propagated back to the component class automatically.

```html
<input [(ngModel)]="username" placeholder="Enter your username">
<p>Your username is: {{ username }}</p>
```

```ts
  username: string = ""; // Initialize username property with an empty string

```

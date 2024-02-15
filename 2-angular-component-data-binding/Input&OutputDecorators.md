# @Input & @Output Decorators for data communication

## @Input Decorator

In Angular, the @Input() decorator plays a crucial role in data flow between parent and child components. It allows child components to receive data from their parent components. Here's a breakdown of its role and how to use it with an example :

### What is @Input()?

- The @Input() decorator marks a property in a child component as an input property, enabling communication from the parent.
- When decorated, the property becomes reactive to changes in the parent component's data, updating the child component automatically.

### How to use @Input()

#### Apply the decorator

In the child component's TypeScript class, decorate the property you want to receive data from the parent with @Input():

```ts
export class ChildComponent {
  @Input() dataFromParent: string;
}
```

#### Bind in the parent template

Use property binding syntax in the parent component's template to pass data to the child component's input property:

```html
<app-child [dataFromParent]="parentData"></app-child>
```

Replace parentData with the actual data variable in your parent component's TypeScript file.

#### Access in the child component

In the child component's template or TypeScript, access the received data using the input property name:

```html
<p>{{ dataFromParent }}</p>
```

```ts
console.log(this.dataFromParent);
```

## Angular @Output Decorator

In Angular, `@Output` is a decorator used to mark a property in a child component as a way to send data from the child component to the parent component. This allows two-way communication between components, enabling the child component to inform the parent of any changes or events that occur within it.

### How @Output Works

#### Key Aspects

- Decorates a property within the child component class.
- Requires importing `Output` and `EventEmitter` from `@angular/core`.
- Requires creating an instance of `EventEmitter` and assigning it to the decorated property.
- Used within the child component's template to bind to an event (e.g., button click).
- When the event is triggered, the `emit` method of the `EventEmitter` is called, sending data or an event notification to the parent component.

#### Example

#### Child component (`child.component.ts`)

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="emitData()">Send data to parent</button>
  `
})
export class ChildComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  emitData() {
    this.newItemEvent.emit('New data from child!');
  }
}
```

#### Parent component (`parent.component.ts`)

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (newItemEvent)="handleNewItem($event)"></app-child>
  `
})
export class ParentComponent {
  handleNewItem(value: string) {
    console.log('Received data from child:', value);
  }
}
```

#### Explanation

- @Output() decorates the newItemEvent property in the child component.
newItemEvent is assigned a new EventEmitter instance.
- In the child component's template, the emitData() function is bound to the button click event.
- When the button is clicked, emitData() calls newItemEvent.emit, sending the string "New data from child!" to the parent.
- In the parent component's template, the (newItemEvent) event binding listens for the event from the child.
- When the event is received, the handleNewItem() function is called with the emitted data.

By using @Output, you can create interactive and dynamic Angular applications where child components can inform and update parent components based on user interactions or internal changes.

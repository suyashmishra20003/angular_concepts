# Angular Decorators Overview

In Angular, decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators provide a way to add metadata to a class and its members, which Angular can use to configure and manage the class and its dependencies.

## Types of Decorators

- Class
  - @Component
  - @NgModule
  - @Pipe
  - @Directive
  
- Property
  - @Input
  - @Output
  - @HostBinding
  
- Method
  - @HostListner
  
- Parameter
  - @Inject

### 1. Class Decorators

- **@Component**: Defines a component and its metadata.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
```

- **@Directive**: Defines a directive and its metadata.

```ts
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}

```

- **@Pipe**: Defines a pipe and its metadata.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

```

- **@NgModule**: Defines an Angular module and its metadata.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### 2. Property Decorators

- **@Input**: Marks a property as an input property, allowing data to be passed from a parent component.

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>{{ name }}</p>'
})
export class ChildComponent {
  @Input() name: string;
}

```

- **@Output**: Marks a property as an output property, enabling the component to emit events to its parent.

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="notifyParent()">Click me</button>'
})
export class ChildComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  notifyParent() {
    this.notify.emit('Child clicked the button');
  }
}

```

- **@HostBinding**: Binds a property to a host element’s property.

```ts
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {
  @HostBinding('class.active') isActive = true;
}

```

### 3. Method Decorators

- **@HostListener**: Listens to events on the host element.

```ts
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log('Element clicked:', event);
  }
}

```


### 4. Parameter Decorators

- **@Inject**: Specifies a custom provider for a dependency.

```ts
import { Component, Inject } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, world!</h1>'
})
export class AppComponent {
  constructor(@Inject(LoggerService) private logger: LoggerService) {
    logger.log('AppComponent initialized');
  }
}

```


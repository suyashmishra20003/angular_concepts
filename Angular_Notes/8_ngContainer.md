# ng-container

The `ng-container` is a special Angular element that can hold structural directives without adding new elements to the DOM.

```html
<ng-container *ngIf="toggle; else toggleOff">
  <p>The toggle is on.</p>
</ng-container>
<ng-template #toggleOff>
  <p>The toggle is off.</p>
</ng-template>
<button (click)="onToggle()">Toggle</button>
```

```ts
export class AppComponent {
  title = 'angular-ng-container';

  toggle: Boolean = true;

  onToggle(){
    this.toggle = !this.toggle
  }
}
```

One pratical use case for ng-container is, When we have to use 2 structural directives on a single element.


## Does ng-container add anything to the DOM? Why or why not?
No ng-container does not add anything to DOM. Behind the scenes it is converted to ng-template by angular because, Angular reads our html code into ng-templates and container. As this applies to ng-container also which itself does not get rendered but it's content get's rendered.

## performance benefits of using ng-container

As ng-container does not render a separate html element It limits the use of extra html elements. Reducing DOM elements can lead to performance benefits, especially in large-scale applications.
- ***Reflow & Repaint:*** Fewer DOM elements mean less reflow and repaint work for the browser, which can improve rendering performance, especially on complex pages.
- ***Memory Usage:*** Less DOM means fewer nodes to store and manage in memory, reducing the footprint of your application.
- ***Faster Change Detection:*** Fewer elements can lead to more efficient Angular change detection because Angular doesn't have to check and update as many elements on every detection cycle.
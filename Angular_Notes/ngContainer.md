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


# Understanding @ViewChildren in Angular: Accessing Child Elements and Directives

In Angular, `@ViewChildren` is a decorator that allows you to access a collection of child elements or directives within the component's template view. This provides a way to interact with and manipulate child elements programmatically, enhancing your component's functionality and dynamism.

## Key Points

- Decorates a class property with the type `QueryList<T> (where T is the type of the child element or directive)`.
- The QueryList is updated dynamically, reflecting changes in the view hierarchy (e.g., adding/removing elements).
- Use sparingly and thoughtfully, as accessing the DOM can impact performance.
- `@ViewChild` return a single element with that template variable name.
- `@ViewChildren` return all the elements with that template variable name.

```html
<div class="input-container">
  <input type="text" placeholder="First Name" #inputEl>
  <br><br>
  <input type="text" placeholder="Middle Name" #inputEl>
  <br><br>
  <input type="text" placeholder="Last Name" #inputEl>
  <button (click) ="show()">Show Full Name</button>
  <h3>{{ fullName }}</h3>
</div>
```

```ts
export class AppComponent {
  title = 'angular-view-children';
  fullName: string = '';
  @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef>;

  show(){
    this.inputElements.forEach((el) => {
       console.log(el.nativeElement.value) 
    })
  }
}
```

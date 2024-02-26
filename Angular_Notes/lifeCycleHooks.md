# Angular Life Cycle Hooks

`The Angular life cycle hooks are the methods that angular invokes on a directive or a component, as  it creates, changes and destroys them.`

- When the Angular application starts, it first creates and renders the
root component.
- Then it creates and renders its children an their children. In this way, it forms a tree of components.
- Once Angular loads the component, it starts the process of rendering the view. To do that, it needs to check the input properties, evaluate the data bindings and expressions, render the projected content etc.
- Angular then also removes the component form the DOM when it is no longer needed.
- Angular lets us  know when these events happen, usimg Angular lifecycle hooks.
  
## Change Detection

`Change Detection` in Angular is a mechanism by which, Angular keeps the view temlate in sync with component class.

Angular Change detection cycle runs when :-

- Whenever the @input property of a component changes.
- Whenever a DOM event happens. Ex. Click or Change.
- Whenever a timer events happens using setTimeout()/setInterval().
- Whenever a HTTP request is made.

## `ngOnChanges`

- `It is invoked whenever one or more data-bound input properties of your component change their values.`

- Receives a SimpleChanges object as an argument, containing information about the changed properties:
  - previousValue: The previous value of the property before the change.
  - currentValue: The current value of the property after the change.
  - firstChange: A boolean indicating if this is the first change since the component's initialization.

In Angular, the ngOnChanges lifecycle hook allows you to respond to changes in a component's input properties. It is invoked whenever one or more data-bound input properties of your component change their values. This lets you perform specific actions based on these changes, such as updating the component's view or triggering other processes.

### Key Points about ngOnChanges

- Called immediately after the default change detector checks data-bound properties and before the view and content children are checked.
- Receives a SimpleChanges object as an argument, containing information about the changed properties:
  - previousValue: The previous value of the property before the change.
  - currentValue: The current value of the property after the change.
  - firstChange: A boolean indicating if this is the first change since the component's initialization.

### When to Use ngOnChanges

- When you need to execute logic in response to specific input property changes.
- For tasks that don't require access to the DOM (e.g., updating internal state, triggering side effects).

## `ngOnInit`

`ngOnInit: The Backbone of Initialization in Angular Components`

In Angular, the ngOnInit lifecycle hook plays a crucial role in component initialization. **It's invoked after the component's properties are initialized and before the first change detection cycle.** This makes it the ideal place to perform various setup tasks that require access to data or the DOM. It runs only once i.e. during the first change detection cycle. After that, if the input changes, this hook does not gets called.

### Key Points

- Called once, upon the component's creation and after its input properties are bound.
- Provides a safe space for executing initialization logic without being triggered by subsequent data changes.
- By the time ngOninit gets called, none of the child components or projected contents or view are available at this point.
- Hence any property decoratd with @ViewChild, @ViewChildren, @ContentChild or @contetChildren will not be available to use.
  
#### Often used for

- Fetching initial data from APIs or services.
- Setting up subscriptions to events or data sources.
- Performing initial calculations or data transformations.
- Manipulating the DOM to configure the initial state of the component.

## `ngDoCheck`

`ngDoCheck in Angular: Detecting Changes Beyond Default Mechanisms.`

In Angular, the ngDoCheck lifecycle hook provides a way to manually detect changes in your component's state or properties that might not be caught by the default change detection mechanism.

### When to Avoid ngDoCheck

- Simple Data Structures: If you're working with primitive values or shallow objects, the default change detection is usually sufficient.
- Observable/Promise-Based Data: If you're using Observables or Promises to manage data changes, they trigger change detection automatically, eliminating the need for ngDoCheck.

## `ngAfterContentInit`

In Angular, ngAfterContentInit is a lifecycle hook that gets invoked once after the component's projected content has been fully initialized. This means that all projected content (both from templates and other components) and child views have been created and rendered.

- `ngAfterContentInit` is called only once after the initial projected content is loaded.
- Even if we do nat have any projected content `ngAfterContentInit` will be automatically called after ngOnInit
- If the content changes dynamically, use ngDoCheck or ContentChildren to detect and react to those changes.
- Be cautious with DOM manipulation as excessive changes can impact performance.
- This hook f=gets called only once, during the first change detection cycle. After that, If the projected content changes, this lifecycle hook will not get called.

## `ngAfterContentChecked`

- The ngAfterContentChecked lifecycle hook is called during every change detection cycle, After Angular has finished initializing and checking projected content
- Angular updates the properties decorated with @ContentChild & @ContentChildren decorator, before raising @ngAfterContentChecked hook.

## `ngAfterViewInit`

- The ngAfterViewInit is called after the components View temlate and all its child components view templated are fully initialized.
- Angular also updates the properties decorated with @ViewChild and @ViewChildren decorator before raising this hook.
- This hook is called during the first changedetection cycle, when Angular initializes the view for the first time.
- By the time this hook gets's called for a component, all the lifecycle hook methods of child components and directives are completely processed and child components are completely ready.
- **`The ngAfterViewInit hook is also component only hook. It cannot be called in directives.`**

## `ngAfterViewChecked`

- Angular fires ngAfterViewChecked hook after it checks and updates the components View temlate and all its child components view templates.
- This hook is called during the first change detection cycle, after ngAfterViewInit hook has executed. And after that during every change detection cycle.
- Angular also upadates the properties decorated with @VieChild and @ViewChildren decortor before raising this hook.
- **`The ngAfterViewChecked hook is a component only hook. It cannot be called in directives.`**

## `ngOnDestroy`

- Angular fires ngOnDestroy lifecycle hook just before the component or the directive is destriyed i.e removed from the DOM.
- This hook is a great place to do some change cleanup work like the unsubscribe from an observable or detach event handler etc., as this hook is called right before the component is destroyed.
- The ngOnDestroy is the last lifecycle hook of a component & a directive.

## Summary

- Any Lifecycle hook ending with keyword `Init` is called only once.

- Component is initialized
- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit (After Content Projection)
- ngAfterContentChecked
- ngAfterViewInit (just before this is called all the child components and their lifecycle hooks are called and initialized)
- ngAfterViewChecked
- ngOnDestroy

- ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked hooks are not available in a directive.
  
```ts
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy{
  title: string = 'Demo Component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent: ElementRef;

  constructor(){
    console.log('Demo component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Hook called');
    // console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit Hook called');
    //console.log(this.tempPara.nativeElement.innerHTML);
  }

  ngDoCheck(){
    console.log('ngDoCheck Hook called');
    //console.log('In ngDoCheck', this.paraContent)
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Hook called');
    //console.log('In ngAfterContentInit', this.paraContent.nativeElement)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Hook called');
    //console.log('In ngAfterContentChecked', this.tempPara);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit Hook called');
    //console.log('In ngAfterViewInit', this.tempPara);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Hook called');
    //console.log(this.tempPara.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Hook called');
  }
}
```

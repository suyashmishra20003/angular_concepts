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

## ngOnChanges

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

## ngOnInit

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

## Summary

- Component is initialized
- Change Detection runs hence ngOnChanges runs.
- After ngOnChanges ngOnInit is called.

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

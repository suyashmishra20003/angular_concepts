# `Observables`

An Observable is a wrapper around asynhronous data. We use an observable
to handle async data.
we can also use Promises to handle asynchronous data.

## `Difference between a  Async operation and Async data`

- Javascript is a single threaded language which means it reads code line by line or synchronously. Synchronous code is blocking in nature.
- Asynchronous code does not execute in single-threaded. It gets executed in the background.
- Async operation refers to the execution of a task that doesn't block the main thread.
- Async data refers to the information that becomes available after an async operation completes.
- Async operations are often used to fetch or generate async data.
- The result of an async operation becomes the async data once it's retrieved or generated.

## `Promise vs Observable`

- `Promise` Represents a single value or the eventual completion (or failure) of an asynchronous operation. Once a promise is resolved or rejected, it cannot be reused to handle multiple values.
- `Observable` Represents a stream of values over time. It can emit multiple values asynchronously and is capable of handling continuous streams of data.

| Feature                    | Promise                                            | Observable                                            |
|----------------------------|----------------------------------------------------|-------------------------------------------------------|
| Single vs. Multiple Values | Represents a single value or the eventual completion (or failure) of an asynchronous operation. | Represents a stream of values over time, capable of emitting multiple values asynchronously. |
| Lazy vs. Eager Execution  | Executes immediately once created (eager execution). | Executes lazily; doesn't start emitting values until subscribed to. |
| Cancellation              | Once created, cannot be canceled.                  | Supports cancellation through `unsubscribe()` method.   |
| Multiple Observers        | Doesn't support multiple observers. Once resolved or rejected, value is fixed. | Supports multiple observers, each receiving its own copy of emitted values. |
| Operators                 | Provides limited built-in methods (`then()`, `catch()`). | Offers a rich set of operators for powerful stream manipulation. |

## `Observable Pattern`

- When we use an Observer we are basically using an Observer pattern where an Observeable will emit an event when something hapens.
- Subscriber will listen for that event
- Subscriber will handle that event by executing some functions.

It is divided into three parts :-

- Observable (Event Emitter)
  - Next
  - Error
  - Completion
- Observer (Event Listner Subscriber)
  - Subscribe()
- Hndler
  - Next
  - Error
  - Completion

## `Creating and using an Observable`

Create an Observable: You can create an Observable using the Observable class constructor and the create static method. Inside the create method, you define the logic for emitting data or events over time.

Subscribe to the Observable: Once you have created the Observable, you can subscribe to it to start receiving values emitted by the Observable. You can use the subscribe method to specify the callback functions to handle emitted values, errors, and completion.

Here's a simple example of creating and using an Observable in an Angular component:

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  template: `
    <div>{{ message }}</div>
  `
})
export class ExampleComponent implements OnInit {
  message: string;

  ngOnInit() {
    // Create an Observable that emits a single value after a delay
    const observable = new Observable<string>(observer => {
      setTimeout(() => {
        observer.next('Hello from Observable!');
        observer.complete(); // Signal completion
      }, 2000);
    });

    // Subscribe to the Observable to receive the emitted value
    observable.subscribe(
      value => this.message = value, // Handle next value
      error => console.error(error), // Handle errors
      () => console.log('Observable completed') // Handle completion
    );
  }
}
```

- When error or complete event is emmitted the observale will stop emmitting data.

## `of & from operator`

The from and of operators in RxJS are used to create Observables from various types of input data, but they have different behaviors and use cases:

### of Operator

- The of operator is used to create an Observable that emits a sequence of values provided as arguments.
- It accepts a list of values or a single value as arguments and emits each value sequentially.
- It completes immediately after emitting all the provided values.
- Use of when you want to emit a fixed set of known values synchronously.

Example:

```ts
import { of } from 'rxjs';

const source = of([1, 2, 3, 4, 5],'Hello');
source.subscribe(value => console.log(value)); // Output: [1, 2, 3, 4, 5], 'Hello'
```

### from Operator

- The from operator is used to create an Observable from an array, array-like object, Promise, Iterable, or Observable-like object.
- It emits each item in the input collection individually.
- It completes after emitting all the items in the input collection.
- Use from when you want to convert an array, Promise, or other iterable object into an Observable.
  
Example:

```ts
import { from } from 'rxjs';

const array = [1, 2, 3, 4, 5];
const source = from(array);
source.subscribe(value => console.log(value)); // Output: 1, 2, 3, 4, 5
```

### In summary

- Use the of operator to create an Observable from a fixed set of known values.
- Use the from operator to create an Observable from an array, Promise, Iterable, or Observable-like object.
- Both operators emit values sequentially, but from emits items individually from a collection, while of emits the entire collection as a single value.

## `fromEvent Operator`

- Purpose: Creates an observable from a DOM event target or similar event-emitting sources.
- Parameters:
  - target: The DOM element or event emitter to listen to.
  - eventName: The specific event name you want to listen for (e.g., 'click', 'change').

Key Points:

- `fromEvent` helps bridge the gap between DOM events and observables.
- It enables you to integrate event-driven behavior into your Angular applications using RxJS.
- Remember to unsubscribe from observables when appropriate to avoid memory leaks.

Example:

```html
<div  class="parentDiv" ></div>
<button #createButton (click)="showItem()"  type="button">Create new Item</button>
```

```ts
export class AppComponent implements OnDestroy, AfterViewInit{
  ngAfterViewInit(): void {
    this.btnFromEvent()

  }

  @ViewChild('createButton') createButton:ElementRef 
  createBtnObservable:Observable<any> 
  
  ngOnDestroy(): void {
  }

  btnFromEvent(){
    this.createBtnObservable = fromEvent(this.createButton.nativeElement, 'click')

    this.createBtnObservable.subscribe((value)=>{
      console.log(value);
      
    })
  }

  showItem(){
    let div = document.createElement('div')
    div.innerText = 'Item'
    document.getElementsByClassName('parentDiv')[0].appendChild(div)
  }
}
```

## `Map and Filter Operators`

### Map Operator

- The map operator is used to transform each value emitted by the source  Observable into a new value.
- Use the map operator when you want to transform each emitted value into another value.

 Example

```ts
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
const modifiedSource = source.pipe(
  map(value => value * 10)
);

modifiedSource.subscribe(value => console.log(value)); // Output: 10, 20, 30, 40, 50

```

### Filter Operator

- The filter operator is used to selectively emit values emitted by the source Observable based on a predicate function.
- Use the filter operator when you want to emit only certain values from the source Observable.

 Example

```typescript
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
const modifiedSource = source.pipe(
  filter(value => value % 2 === 0) // Only emit even numbers
);

modifiedSource.subscribe(value => console.log(value)); // Output: 2, 4
```

## `Chaning in Operators`

You can chain RxJS operators to create a data processing pipeline in Angular Observables. Chaining operators allows you to perform multiple transformations, filtering, and other operations on the emitted values in a sequential manner.

```typescript
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
const modifiedSource = source.pipe(
  map(value => value * 10),
  filter(value => value % 2 === 0) // Only emit even numbers
);
```

In summary:

- Use the map operator to transform each emitted value into another value.
- Use the filter operator to selectively emit values based on a predicate function.
- Both operators are essential for manipulating data streams in Angular Observables and serve different purposes in data transformation pipelines.
- The output of the Observable will be different depending on the order of the operators in the pipe.
- it's important to consider the desired data processing logic and the order in which you want the operators to be applied when chaining multiple operators.

## `Subjects`

A subject is a speial type of observable that allows values to be multicasted to many observers. Subjects are like EventEmitters.

The main purpose of using an subject is for cross component communication. Subject will emit same value for all its subscribers.

A Subject can be a data provider as well as a data consumer while a observalble will always emit (provider) a value.

## `Observables vs Subjects`

### Observables

- Observables represent a data stream that can emit multiple values over time.
- They are passive and do not emit any values until they are subscribed to.
- Observables can have multiple subscribers, and each subscriber will receive the same sequence of values emitted by the Observable independently.

### Subjects

- Subjects are a special type of Observable that can act as both an Observable and an Observer.
- Subjects are typically used for multicasting values to multiple Observers, making them useful for scenarios like event handling, data sharing, and creating observable data stores.
- Subjects come in several flavors like Subject, BehaviorSubject, ReplaySubject, and AsyncSubject, each with its own behavior and use cases.
- A subject is `multicast` while the observable is `unicast`.
- A subject will always emit the same value for all its subscribers(multicast).
- Observables does not always the same value for all its subscribers.

Example:

```ts
 ngOnInit(): void {
    let obs = new Observable(
      (observer) => {
        observer.next(Math.random())
      }
    );

    const subject = new Subject()

    // Observable 1
    obs.subscribe(
      (data) => {
        console.log(data)
      }
    )
    // Observable 2
    obs.subscribe(
      (data) => {
        console.log(data)
      }
    )
    // Subject 1
    subject.subscribe(
      (data) => {
        console.log(data) // Same value for subject
      }
    )
    // Subject 2
    subject.subscribe(
      (data) => {
        console.log(data) // Same value for subject
      }
    )
    subject.next(Math.random())
  }
```

## `Types of Subject`

 Here are examples demonstrating the usage of different types of Subjects in Angular:

### Subject

A basic Subject acts as both an Observable and an Observer. It can subscribe to other Observables and also emit values to those Observables.

```ts
import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe(value => console.log(`Observer 1: ${value}`));
subject.next(1); // Output: Observer 1: 1

subject.subscribe(value => console.log(`Observer 2: ${value}`));
subject.next(2); // Output: Observer 1: 2, Observer 2: 2

```

### BehaviorSubject

- A BehaviorSubject is similar to a Subject, but it has a `current value` that it emits immediately to new subscribers, and it stores the latest value that it has emitted.
- A Behaviour Subject is a subject which can hold an initial value which it emits if no new value is emitted. A BehaviourSubject emits an inital value or last emitted value for a new subscriber.
- The initial value will be the ast emmitted value.

```ts
import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject<number>(0);

behaviorSubject.subscribe(value => console.log(`Observer 1: ${value}`)); // Output: Observer 1: 0

behaviorSubject.next(1); // Output: Observer 1: 1

behaviorSubject.subscribe(value => console.log(`Observer 2: ${value}`)); // Output: Observer 2: 1

behaviorSubject.next(2); // Output: Observer 1: 2, Observer 2: 2
```

### ReplaySubject

- A ReplaySubject records a buffer of values and replays them to new subscribers. You can specify the size of the buffer, and it will emit the last n values to new subscribers.
- It replays old value to new subscribers when they first subscribe.
- The ReplaySubject will store every value it emits in buffer. It will emit them to the new subscribrs i the order it recieved them. You can configure the buffer using the arguments `bufferSize` and `windowTime`
- `bufferSize` : No of items that ReplaySubject will keep in it buffer. It defaults to onfinity.
- `windowTime` : The amount of time to keep the value in the buffer. Defaults to Infinity.


```ts
import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject<number>(2);

replaySubject.next(1);
replaySubject.next(2);

replaySubject.subscribe(value => console.log(`Observer 1: ${value}`)); // Output: Observer 1: 1, Observer 1: 2

replaySubject.next(3); // Output: Observer 1: 2, Observer 1: 3

```

### AsyncSubject

- An AsyncSubject only emits the last value emitted by the source Observable, but only after the source Observable completes
- Async subject always emits the single value. It emits the last emitted value before the complete method is called.

```ts
import { AsyncSubject } from 'rxjs';

const asyncSubject = new AsyncSubject<number>();

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

asyncSubject.subscribe(value => console.log(`Observer 1: ${value}`)); // Output: None

asyncSubject.complete(); // Emit last value after completion

// Output: Observer 1: 3

```

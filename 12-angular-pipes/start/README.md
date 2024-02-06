# What is a Pipe ?

Pipes in Angular are used to transform or format data befire displaying in the view. Angular pipe takes data as an input and it formats or transforms that data before dsiplaying it in the template.

In Angular, pipes are special functions that transform data before displaying it in templates.

## Commonly Used Built-in Pipes

### DatePipe

- Formats dates according to locale rules and various predefined formats.
- Usage: `{{ date | date:'shortDate' }}, {{ date | date:'mediumTime' }}`

### UpperCasePipe

- UpperCasePipe: Converts text to uppercase.
- Usage: `{{ text | uppercase }}`

### LowerCasePipe

- Converts text to lowercase.
- Usage: `{{ text | lowercase }}`

### CurrencyPipe

- Formats numbers as currency strings based on locale settings.
- Usage: `{{ price | currency:'USD' }}`
  
### PercentPipe

- Formats numbers as percentages.
- Usage: `{{ value | percent }}`

### DecimalPipe

- Formats numbers with a specified number of decimal places.
- Usage: `{{ number | decimal:'1.2-2' }} (two decimal places, allow negative values)`

### AsyncPipe

- Subscribes to an Observable or Promise and displays its latest value.
- Usage: `{{ observable | async }}`

### JsonPipe

- Converts objects or arrays to JSON strings.
- Usage: `{{ object | json }}`

### SlicePipe

- Creates a new array or string containing a subset of items.
- Usage: `{{ items | slice:start:end }} (start from index start, include up to end)`

### KeyValuePipe

- Converts an object into an array of key-value pairs.
- Usage: `{{ object | keyvalue }}`

## Chaining Multiple Pipes

We can chain multiple Angular pipes together to perform sequential transformations on our data within templates. This allows us to combine different formatting functionalities for more granular control over how our data is presented. Here's how it works :

```ts
{{ value | pipe1 | pipe2 | pipe3 }}
```

## How to create a custom pipe?

We can create a custom angular pipe in three simple steps:

- Create a ts class and export it. By convention, a pipe class should end with pipe.
- Decorate that class with @Pipe Decorator. There we can specify a name for the pipe.
- Inherit PipeTransform interface and implement its transform method.

## Why to bot use pipes for filtering or sorting ?

Angular team always recommends not to use pipe to filter or sort data. When we use pipe for filtering or sorting data, it can significantly impact the performance of the appliation, f not implemented carefully.

## Pure and Impure Pipes in Angular

- Pure pipes are deterministic, meaning they always return the same output for the same input values.
- Impure pipes can generate different outputs for the same input values depending on external factors or internal state.

### What is pure change ?

Following changes are considered as pure change in a data:

- If the pipe is being used on a primitive type like string, number, boolean etc. And if the value of that primitive type changes, it is considered as pure changes.
- If the pipe is being used on a reference type input (array, object etc.) , and if the reference of that input changes, than the change is pure change.
- NOTE : But if the input is of reference type, and only its property value changes and its reference has not changes, that change is not a pure change.

### What is a pure pipe ?

A pure pipe is that pipe which gets called whenever there is a pure change on the input value. By default every pipe is a pure pipe.

### What is a impure pipe ?

A  pipe is impure when it is not pure. An Impure pipe gets called for each change detection cycle and it is performance intensive.

For converting any pure pipe to impure pipe use :

```ts
@Pipe({
    name:'customFilterPipe',
    pure: false //* Makes the pipe run everytime the value changes (makes Impure pipe)
})
```

Disadvantage of impure pipe:  It get called in every change detection cycle, It effects the performance of the application. Impure pipe should not be used for filtering and sorting data.

## Async Pipe in Angular

The async pipe allows us to handle asynchronous data. It allows us to subscribe to an observable or promise from the view template and returns the value emmited.

```html
    <div style="margin: 10px 0px;">
            Total Students :
            {{totalStudents | async}}
    </div>
```

```ts
 students: Student[];

 totalStudents = new Observable((observer)=>{
    setTimeout(() => {
      observer.next(this.students.length)
    }, 5000);
 });
```
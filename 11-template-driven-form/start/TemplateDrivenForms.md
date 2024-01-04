# Need of Angular forms
- When a normal html form is submitted, it reloads the page by making an HTTP request to the server. Since we create a single page app using angular, we can say that it will restart the complete Angular app.
- To avoid this, we need Angular's help to stop this default behavior. This can be achieved using `Template driven form or Reactive forms` in Angular. Using any one of these two approaches makes working with forms easier.

## Advantages & Disadvantages Template driven form & Reactive forms 
Template-driven forms and reactive forms are two approaches to handling forms in Angular, and each has its own set of advantages and disadvantages.

#### Use Template-Driven Forms When:

- The form is simple, and a quick setup is required.
- The form logic is straightforward, and there is no need for extensive programmatic control.

#### Use Reactive Forms When:

- The form is complex, dynamic, or requires programmatic control.
- Fine-grained control over form state and behavior is necessary.
- Asynchronous operations or dynamic form control manipulation is needed.

# Required Module
To work with forms in Angular, we must import FormsModule from @angular/forms in the App Module file.

## Example
```
in html
<div>
  <h2>User Form</h2>
  <form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" ngModel required>
    </div>
    <button type="submit" [disabled]="userForm.invalid">Submit</button>
  </form>
</div>

```

```
in Ts
 submitForm(form: any): void {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      // You can perform actions like sending the data to a server here
    } else {
      console.log('Form is invalid. Please fix the errors.');
    }
  }

```

## Need of name and ngModel attribute in template driven forms

 The name attribute is an essential part of Angular template-driven forms. It facilitates the binding of form controls to the form model, helps in tracking control state, and is used during form submission to collect data.

 ```
     <input type="text" id="username" name="username" ngModel required>

 ```

- The `ngModel` directive in Angular template-driven forms requires a unique name to bind to. The name attribute is used to establish this binding.
- Angular uses the name attribute to track the state of each form control. The name attribute acts as a unique identifier for each control, helping Angular manage its state and validation.
- When the form is submitted, the data from the controls is collected using the name attributes. 

## Touched and Dirty Form property
- A form/form_Control is considered as `touched` if any of its control has been `focused`. For a touched form/form_Control its `touched` property will be `true` and its `untouched` property will be `false`.
- A form/form_Control is considered as `dirty` if the control value is changed. For a dirty form control its dirty propertywill be true otherwise false.
- You can use these properties along with other properties of the NgForm and NgModel directives to create more interactive and user-friendly forms in Angular.

```
<form #userForm="ngForm">
  <input name="email" ngModel required>
  <div *ngIf="userForm.controls.email.dirty && userForm.controls.email.invalid">
    Please enter a valid email.
  </div>
</form>
```


## Inbuilt Form validators in Template driven form  
Angular provides a set of built-in validators that you can use in template-driven forms. These validators are directives that you can apply directly to form controls in the template. Here are some of the commonly used built-in validators in Angular template-driven forms:

#### Required Validator (required):

Ensures that a form control has a non-empty value.
```
<input name="name" ngModel required>
``` 

#### Min and Max Length Validators (ngModel minlength and ngModel maxlength):
Checks the length of a string against specified minimum and maximum values.
```
<input name="username" ngModel minlength="3" maxlength="20">
``` 

#### Pattern Validator (ngModel pattern):
Validates the input against a regular expression pattern.
```
<input name="email" ngModel pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
``` 

#### Email Validator (ngModel email):
Ensures that the input is a valid email address.
```
 <input name="email" ngModel email>
```

#### Min and Max Validators (ngModel min and ngModel max):
Checks the numeric value of a control against specified minimum and maximum values.
```
<input name="age" ngModel type="number" min="18" max="99">
``` 

#  Questions for AI
- state advantages and disadvantages of template driven and reactive forms in angular
- implement a simple template driven form in angular
- Do we need name attribute to access controls from template driven forms
- What are touched and dirty property in angular template driven form NgForm object







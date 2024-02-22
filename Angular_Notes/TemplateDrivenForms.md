# Need of Angular forms
- When a normal html form is submitted, it reloads the page by making an HTTP request to the server. Since we create a single page app using angular, we can say that it will restart the complete Angular app.
- To avoid this, we need Angular's help to stop this default behavior. This can be achieved using `Template driven form or Reactive forms` in Angular. Using any one of these two approaches makes working with forms easier.
- Any button situated inside the HTML form tag is by Default a submit button.
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
To work with forms in Angular, we must import **`FormsModule`** from @angular/forms in the App Module file.

## Example
```html
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

```ts
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

```html
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
```html
<input name="name" ngModel required>
``` 

#### Min and Max Length Validators (ngModel minlength and ngModel maxlength):
Checks the length of a string against specified minimum and maximum values.
```html
<input name="username" ngModel minlength="3" maxlength="20">
``` 

#### Pattern Validator (ngModel pattern):
Validates the input against a regular expression pattern.
```html
<input name="email" ngModel pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
``` 

#### Email Validator (ngModel email):
Ensures that the input is a valid email address.
```html
 <input name="email" ngModel email>
```

#### Min and Max Validators (ngModel min and ngModel max):
Checks the numeric value of a control against specified minimum and maximum values.
```html
<input name="age" ngModel type="number" min="18" max="99">
``` 

# Two way data binding in angular forms
Two-way data binding in Angular is a mechanism that combines property binding and event binding in a single notation using `[(ngModel)]`. It allows you to establish a synchronization between the model (component property) and the view (HTML input element, for example) in both directions. This means that changes in the model update the view, and changes in the view update the model.

```html
<input type="text" id="username" [(ngModel)]="username" name="username">

```

```ts
export class AppComponent {
  user = '';
}
```



# What is From group ?
- A `FreomGroup` is a collection of `FormControl`. it can also contain other FormGroup.
- To create a form group, we can use `ngModelGroup` directive
- We create a FromGroup to organize and manage related Form Controls together. We can track the value and validity state of form control instances present inside a FormGroup

##### Example

```html
    <div class="input-box address" ngModelGroup="addressDetails" > // FormGroup
      <label>Address</label>
      <input type="text" ngModel name="street1"  placeholder="Street address" required />
      <div class="column">
        <input type="text" ngModel name="city" placeholder="City" required />
      </div>
      <div class="column">
        <input type="text" ngModel name="region" placeholder="Region" />
        <input type="number" ngModel name="postalCode" required placeholder="Postal code" />
      </div>
    </div>

     <small 
    *ngIf="
          resgisteredFormRef.controls['addressDetails'].invalid 
          &&
          resgisteredFormRef.controls['addressDetails'].dirty " >
      
      *Some of the  address fields does not have a valid value
    </small>


```
# setValue() & patchValue() Methods 
These methods are useful when you want to set or update form values based on certain conditions or events in your application.

## The setValue() method
The setValue() method is used to update a FormControl, FormGroup or FormArray value.

To the setValue() method, we pass an object to update the value of a FormControl, FormGroup or FormArray. The structure of that object must match the structure of FormControl, FormGroup or FormArray which we are trying to update.


```ts


 this.form.setValue({
      dob: this.form.value.dob,
      email: this.form.value.email,
      firstName: this.form.value.firstName,
      gender: 'male',
      lastName: this.form.value.lastName,
      phoneNumber: this.form.value.phoneNumber,
      userName: username,
      addressDetails: {
        city: this.form.value.addressDetails.city,
        country: this.form.value.addressDetails.country,
        postalCode: this.form.value.addressDetails.postalCode,
        region: this.form.value.addressDetails.region,
        street1: this.form.value.addressDetails.street1,
        street2: this.form.value.addressDetails.street2,
      },
    
    })

```

-  On using setValue we have to pass an object in the structure of the form value
- This process is very cumbersome, because to set a single value we have to write the entire form control value object. 
-  that is why we use patchvalue method


## The patchValue() method
The patchValue() method is used to update only a subset of the element of FormGroup or FormArray vaalue.
It will only update the matching objects and ignores the rest
```ts
 //* Using patchValue to update single value
    this.form.form.patchValue({
      userName:username,
      adressDetails: {
        country:'Japan'
      }
    })
    
```
### Key Differences:
- `setValue`: It requires an object with values for all form controls in the form group. If you miss any form control, it will throw an error.
- `patchValue`: It allows you to update only a subset of form controls. If you omit any form control, it won't throw an error.

# Resetting Form 
To reset a template-driven form, you can use the ngForm directive along with the #form="ngForm" template reference variable. Here's a step-by-step explanation with an example:
```ts

  resetForm(form: any): void {
    form.resetForm(); // This resets the form
  }

  // Alternate approach
  resetForm(form: any): void {
    form.reset(); // This resets the form
  }

```


#  Questions for AI
- state advantages and disadvantages of template driven and reactive forms in angular
- implement a simple template driven form in angular
- Do we need name attribute to access controls from template driven forms
- What are touched and dirty property in angular template driven form NgForm object
- what is two way data binding and how to use it in angular form ? explain with example
- what are setValue() & patchValue() methods in template driven forms? How to use them to update values in the form? explain with exapmle
- what are setvalue and patchValues methods in angular forms ? explain with exammple
- How to reset template driven forms in angular ? Explain with example

# Why not use normal HTML Form
When a Normal HTML form is submitted, it reloads the apge by making an HTTP request to the server.Since we create a single page app using Angular, we can say that it will restart the complete Angular application.

To avoid this, we eed Angular help to stop this default behavior. This can be achieved using template driven form or reactive form in Angular. Using any one of these two approaches makes working with forms easier.

# Why Reactive form 
#### Pros
- Structure of the form is defined in Typescript class.
- Creating dynamic controls is easier 
- Easy to unit test
#### Cons
- Most of the things are done by writing code.

# Required Module
To workwith forms in Angular, we must import `ReactiveFormsModule` from `@angular/forms` in the app Module file

### Example
```
<form class="form" [formGroup]="reactiveForm" (ngSubmit)="OnSubmitForm()" >
   <div class="column">
      <div class="input-box">
        <input type="text" formControlName="firstName" placeholder="First Name" />
      </div>
      <div class="input-box">
        <input type="text" formControlName="lastName" placeholder="Last Name" />
      </div>
    </div>    
    <div class="input-box">
      <input type="text" formControlName="email" placeholder="Email" />
    </div>
    <button type="submit" [ngClass]="reactiveForm.invalid ? 'submit-btn-disabled' : 'submit-btn' " [disabled]="reactiveForm.invalid" class="submit-btn"> Submit </button>
</form>

in ts

ngOnInit(): void {
  this.reactiveForm = new FormGroup({
      firstName:new FormControl(null),
      lastName:new FormControl(null),
      email:new FormControl(null),
  })
}


OnSubmitForm(){
  console.log(this.reactiveForm);  
}

```

# Form Validation in Reactive Form
 Reactive forms in Angular provide a robust mechanism for implementing validation rules and displaying error messages based on the state of form controls.
 ```
 <form class="form" [formGroup]="reactiveForm" (ngSubmit)="OnSubmitForm()" >
   <div class="column">
      <div class="input-box">
        <input type="text" formControlName="firstName" placeholder="First Name" />
      </div>
      <div class="input-box">
        <input type="text" formControlName="lastName" placeholder="Last Name" />
      </div>
    </div>    
    <div class="input-box">
      <input type="text" formControlName="email" placeholder="Email" />
    </div>
    <button type="submit" [ngClass]="reactiveForm.invalid ? 'submit-btn-disabled' : 'submit-btn' " [disabled]="reactiveForm.invalid" class="submit-btn"> Submit </button>
</form>

ngOnInit(): void {
  this.reactiveForm = new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.email,Validators.required]), //* For multiple validators use []
  })
}


OnSubmitForm(){
  console.log(this.reactiveForm);  
}
 ```

 For more information on types of inbuilt 
 [Validators](https://angular.io/api/forms/Validators) class
 

 # Showing Validation Error Messages
In Angular reactive forms, you can show validation error messages to users when they interact with the form. Below is an example of how to implement and display validation error messages in Angular reactive forms.

 ```
       <div class="input-box">
        <input type="text" formControlName="firstName" placeholder="First Name" />
        <!-- <small 
            *ngIf="reactiveForm.controls['firstName'].invalid 
                    && reactiveForm.controls['firstName'].dirty"            
        >
                *First name is a required field
        </small> -->
        <!-- *Alternate approach -->
        <small 
              *ngIf="
                reactiveForm.get('firstName').invalid &&
                reactiveForm.get('firstName').touched"
              >*First name is a required field</small>
      </div>
 ```

 # Grouping of Form Controls

In Angular reactive forms, you can group form controls together using the FormGroup class. This allows you to organize related controls and validate them as a group. Below is an example of how to group form controls in a reactive form.

```
 <form class="form" [formGroup]="reactiveForm" (ngSubmit)="OnSubmitForm()" >
   <div class="column">
      <div class="input-box">
        <input type="text" formControlName="firstName" placeholder="First Name" />
      </div>
      <div class="input-box">
        <input type="text" formControlName="lastName" placeholder="Last Name" />
      </div>
    </div>    
    <div class="input-box">
      <input type="text" formControlName="email" placeholder="Email" />
    </div>
        <div formGroupName="addressDetails" class="input-box address"> //* formGroupName directive is used to group formControls in html
      <label>Address</label>
      <input formControlName="street" type="text" placeholder="Street address" />
      <div class="column">
        <div class="select-box">
          <select formControlName="country" name="country">
            <option hidden>Country</option>
            <option>America</option>
            <option>Japan</option>
            <option>India</option>
            <option>Nepal</option>
          </select>
        </div>
        <input formControlName="city" type="text" placeholder="City" />
      </div>
      <div class="column">
        <input formControlName="region" type="text" placeholder="Region" />
        <input formControlName="postal" type="number" placeholder="Postal code" />
      </div>
    </div>
    <button type="submit" [ngClass]="reactiveForm.invalid ? 'submit-btn-disabled' : 'submit-btn' " [disabled]="reactiveForm.invalid" class="submit-btn"> Submit </button>
</form>

in TS
ngOnInit(): void {
  this.reactiveForm = new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.email,Validators.required]), //* For multiple validators use []
      addressDetails: new FormGroup({
        street:new FormControl(null),
        country:new FormControl('India'),
        city:new FormControl(null),
        region:new FormControl(null),
        postal:new FormControl(null),
      })
  })
}

OnSubmitForm(){
  console.log(this.reactiveForm);  
}

```

# Creating and using Form Array
A FormArray is a way to manage a collection of form controls in Angular. The form control can be formGroup, FormControl or another FormArray.

### What is FormArray ?
In Angular, we can group form controls in two ways.
- Using `FromGroup`
- Using `FromArray`

The difference between FormGroup and FormArray is in the way they create the collection.
- FromGroup store the form controls in the form of key value pair in an object.
- FormArray stores the form control as an element of an array.
  
```
  <form class="form" [formGroup]="reactiveForm" (ngSubmit)="OnSubmitForm()" >
      <div formArrayName="skills" class="input-box skills">
          <h4>Add Skills</h4>
          <div *ngFor="let control of reactiveForm.get('skills')['controls'] let i = index" class="column">
            <input [formControlName]="i" type="text" placeholder="Add Skill...">
            <button type="button" class="btn-add-delete">Delete</button>
          </div> 
      </div>
      <button type="button" class="btn-add-delete">Add Skills</button>
  </form>

  in ts 
  this.reactiveForm = new FormGroup({
        skills: new FormArray([
          new FormControl(null,Validators.required),
          new FormControl(null,Validators.required),
          new FormControl(null,Validators.required),
          new FormControl(null,Validators.required)
        ])
  })
```

### Adding Form Controls Dynamically

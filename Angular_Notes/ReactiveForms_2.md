# Creating a Custom async Validator

We use async validator when we need to send an HTTP request to the server to check if the data entered in a form element is valid or not.

- The async validator must return either a **`promise`** or an **`observable`**.
- Angular does not provide any built-in async validator

##### Custom Validator service

```ts
export class CustomValidators{
    static checkUserName(control:FormControl ){
        return userNameAllowed(control.value)
    }
}

function userNameAllowed(username:string) {
    const takenUserNames = ['suyash', 'shikhar', 'arun']

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (takenUserNames.includes(username)) {
                resolve({checkUserName:true})
            } else {
                resolve(null)
            }
        }, 5000);
    })
}
```

```ts

this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, Validators.required, CustomValidators.noSpaceAllowed ), //* noSpaceAllowed is a custom validator
      lastName: new FormControl(null, Validators.required,CustomValidators.noSpaceAllowed),
      email: new FormControl(null, [Validators.email, Validators.required]), //* For multiple validators use []
      username: new FormControl(null,Validators.required, CustomValidators.checkUserName),
})
```

# ValueChanges & stateChanges Events

### The ValueChanges() Event
The ValueChanges is an event which is raised by Angular forms ehenever the value of the FormControl, FormGroup or FormArray changes.

```ts
 ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, Validators.required, 
      addressDetails: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
    })

    //* ValueChanges Event on FormControl
    this.reactiveForm.get('firstName').valueChanges.subscribe((value)=>{
      console.log(value)
    })

    //* ValueChanges Event on FormGroup
    this.reactiveForm.get('addressDetails').valueChanges.subscribe((value)=>{
      console.log(value);
    })

  }
```

### The satatusChanges Event
The satatusChanges is an event which is raised by Angular forms whenever Angular calculates status of a FormControl, FormGroup or FormArray changes.

```html
<section [ngClass]="formStatus" class="container">
  <header>Registration Form</header>
  <form class="form" [formGroup]="reactiveForm" (ngSubmit)="OnSubmitForm()"></form>
</section>
```

```ts

formStatus:string =''

 ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, Validators.required, 
      addressDetails: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
    })

      //* StatusChanges Event on FormControl
    this.reactiveForm.get('username').statusChanges.subscribe((status)=>{
      console.log(status);
    })

    //* StatusChanges Event on FormGroup
    this.reactiveForm.statusChanges.subscribe((status)=>{
      console.log(status);
      this.formStatus = status;
    })

  }
```

# setValue() and patchValue() Methods

### The setValue() method

- The setValue() method is used to update a FormControl, FormGroup or FormArray value.
- To the setValue() method, we pass an object to update the value of a FormControl, FormGroup or FormArray. The structure of that object must match the structure of FormControl, FormGroup or FormArray which we are trying to update.

```html
<div class="input-box">
        <input type="text"  formControlName="username" placeholder="username" />
        <button class="btn-gen-username" 
        [disabled]="!(reactiveForm.get('firstName').value && reactiveForm.get('lastName').value) && reactiveForm.get('dob').value " 
        (click)="generateUsername()" type="button">
          Create a Username
        </button>
</div>
```

```ts
  generateUsername(){
    let username = 'suysin2024';
   
    //* Updating value using setValue method 
    // Directly accessing formGroup
    //  this.reactiveForm.setValue({
    //    firstName: this.reactiveForm.get('firstName').value,
    //    lastName: this.reactiveForm.get('lastName').value,
    //    email: this.reactiveForm.get('email').value,
    //    username: username,
    //    dob: this.reactiveForm.get('dob').value,
    //    gender: this.reactiveForm.get('gender').value,
    //    addressDetails: {
    //      street: this.reactiveForm.get('address.street').value,
    //      country: this.reactiveForm.get('address.country').value,
    //      city: this.reactiveForm.get('address.city').value,
    //      region: this.reactiveForm.get('address.region').value,
    //      postal: this.reactiveForm.get('address.postal').value,
    //    },
    //    skills: this.reactiveForm.get('skills').value,
    //    experience: this.reactiveForm.get('experience').value
    //  }) 
   
   //todo   Directly accessing formControl
    this.reactiveForm.get('username').setValue(username)
}

```

### The pathValue() method
The pathValue() method is used only a subset of the element od FormGroup or FormArray value.
It will only update the matching objects and ignores the rest.

```html
<div class="input-box">
        <input type="text"  formControlName="username" placeholder="username" />
        <button class="btn-gen-username" 
        [disabled]="!(reactiveForm.get('firstName').value && reactiveForm.get('lastName').value) && reactiveForm.get('dob').value " 
        (click)="generateUsername()" type="button">
          Create a Username
        </button>
</div>
```

```ts
  generateUsername(){
    let username = 'suysin2024';
   
   //todo   Directly accessing formControl
    this.reactiveForm.patchValue({
      username:username,
      addressDetails:{
        city:'New Delhi'
      }
    })
}
```

# Resetting Form Data 

To reset the for use **`reset`** method

```ts
  OnSubmitForm() {
    console.log(this.reactiveForm.value);
    this.formData = this.reactiveForm.value    
    this.reactiveForm.reset() //* For Resetting the form
  }
```

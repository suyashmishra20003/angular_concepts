import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  @ViewChild('resgisteredFormRef') form: NgForm;

  firstNameValue: string = ''
  lastNameValue: string = ''
  dob: string = ''
  emailValue: string = ''
  country:string = ''
  city:string = ''
  region:string = ''
  postal:string = ''
  gender:string = ''
  genders = [
    { id: 'check-male', value: 'male', label: 'Male' },
    { id: 'check-female', value: 'female', label: 'Female' },
    { id: 'check-other', value: 'other', label: 'prefer not to say' },
  ]
  isAgreed:boolean = false

  OnFormSubmitted() {
    console.log(this.form);

    this.form.form.patchValue({
        gender:'male',
        addressDetails:{
          country:'India'
        }
    })

    console.log(
      this.firstNameValue = this.form.value.firstName,
      this.lastNameValue = this.form.value.lastName,
      this.emailValue = this.form.value.email,
      this.dob = this.form.value.dob,
      this.gender = this.form.value.gender,
      this.city  =  this.form.value.addressDetails.city,
      this.country = this.form.value.addressDetails.country,
      this.region = this.form.value.addressDetails.region,
      this.postal = this.form.value.addressDetails.postalCode
    )
    // this.form.resetForm() //* For resetting the form

  }

  generateUsername() {
    let username = ''

    if (this.firstNameValue.length >= 3) {
      username = username + this.firstNameValue.slice(0, 3)
    } else {
      username = username + this.firstNameValue
    }

    if (this.lastNameValue.length >= 3) {
      username = username + this.lastNameValue.slice(0, 3)
    } else {
      username = username + this.lastNameValue
    }

    let birthYear = new Date(this.dob)
    username = username + birthYear.getFullYear()

    username.toLowerCase()

    // this.form.controls['username'].value = username //! this gives an error
    console.log(username);
    //* On using setValue we have to pass an object in the structure of the form value
    //! This process is very cumbersome, because to set a single value we have to write the entire form control value object. 
    //* that is why we use patchvalue method
    // this.form.setValue({
    //   dob: this.form.value.dob,
    //   email: this.form.value.email,
    //   firstName: this.form.value.firstName,
    //   gender: 'male',
    //   lastName: this.form.value.lastName,
    //   phoneNumber: this.form.value.phoneNumber,
    //   userName: username,
    //   addressDetails: {
    //     city: this.form.value.addressDetails.city,
    //     country: this.form.value.addressDetails.country,
    //     postalCode: this.form.value.addressDetails.postalCode,
    //     region: this.form.value.addressDetails.region,
    //     street1: this.form.value.addressDetails.street1,
    //     street2: this.form.value.addressDetails.street2,
    //   },
    
    // })

    //* Using patchValue to update single value
    this.form.form.patchValue({
      userName:username,
      adressDetails: {
        country:'Japan'
      }
    })
    
  }
}

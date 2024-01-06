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
  genders = [
    { id: 'check-male', value: 'male', label: 'Male' },
    { id: 'check-female', value: 'female', label: 'Female' },
    { id: 'check-other', value: 'other', label: 'prefer not to say' },
  ]

  OnFormSubmitted() {
    console.log(this.form);

    console.log(this.form.value.addressDetails)
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
    
  }
}

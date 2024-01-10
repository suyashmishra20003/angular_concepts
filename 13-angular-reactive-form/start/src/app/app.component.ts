import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {  CustomValidators } from './Validators/noSpaceAllowed.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'template-driven-form';
  reactiveForm: FormGroup;
  formStatus:string =''
  formData:any = {}
  isVisible:boolean = false

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, Validators.required, CustomValidators.noSpaceAllowed ), //* noSpaceAllowed is a custom validator
      lastName: new FormControl(null, Validators.required,CustomValidators.noSpaceAllowed),
      email: new FormControl(null, [Validators.email, Validators.required]), //* For multiple validators use []
      username: new FormControl(null,Validators.required, CustomValidators.checkUserName),
      dob: new FormControl(null),
      gender: new FormControl('female'),
      addressDetails: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
      experience: new FormArray([
        new FormGroup({
          companyName: new FormControl(null, Validators.required),
          positionName:new FormControl(null,Validators.required),
          totalExp:new FormControl(null,Validators.required),
          start:new FormControl(null,Validators.required),
          end:new FormControl(null,Validators.required),
        })
      ])
    })

    //* ValueChanges Event on FormControl
    // this.reactiveForm.get('firstName').valueChanges.subscribe((value)=>{
    //   console.log(value)
    // })

    //* ValueChanges Event on FormGroup
    // this.reactiveForm.get('addressDetails').valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    //* StatusChanges Event on FormControl
    // this.reactiveForm.get('username').statusChanges.subscribe((status)=>{
    //   console.log(status);
    // })

    //* StatusChanges Event on FormGroup
    // this.reactiveForm.get('addressDetails').statusChanges.subscribe((status)=>{
    //   console.log(status);
    // })

    this.reactiveForm.statusChanges.subscribe((status)=>{
      // console.log(status);
      this.formStatus = status;
    })
  }

  OnSubmitForm() {
    console.log(this.reactiveForm.value);
    this.formData = this.reactiveForm.value
    this.isVisible = true
    setTimeout(() => {
      let element = document.getElementById('detail_section')
      element.scrollIntoView({behavior:'smooth'})
    }, 500);

    //* For Resetting the form
    this.reactiveForm.reset()
  }

  addSkillsHandler() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  deleteSkillHandler(index:number){
    let controls = <FormArray>this.reactiveForm.get('skills')
    controls.removeAt(index)
    
    //* In Angular, the removeAt method is used with FormArray to remove a control at a specific index.
  }

  addExperienceHandler(){
    let group = <FormArray>this.reactiveForm.get('experience');
    group.push(new FormGroup({
      companyName: new FormControl(null, Validators.required),
      positionName:new FormControl(null,Validators.required),
      totalExp:new FormControl(null,Validators.required),
      start:new FormControl(null,Validators.required),
      end:new FormControl(null,Validators.required),
    }))
  }

  deleteExperienceHandler(index:number){
    let group = <FormArray>this.reactiveForm.get('experience')
    group.removeAt(index)
  }

  generateUsername(){
    let username = '';
    const fName: string= this.reactiveForm.value.firstName;
    const lName: string= this.reactiveForm.value.lastName;
    const dob: string= this.reactiveForm.value.dob;
    
    if(fName.length >= 3){
      username += fName.slice(0, 3);
    }
    else {
      username += fName;
    }

    if(lName.length >= 3){
      username += lName.slice(0, 3);
    }
    else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();
    
    //* Updating value using setValue method 
    // this.reactiveForm.setValue({
    //   firstName: this.reactiveForm.get('firstName').value,
    //   lastName: this.reactiveForm.get('lastName').value,
    //   email: this.reactiveForm.get('email').value,
    //   username: username,
    //   dob: this.reactiveForm.get('dob').value,
    //   gender: this.reactiveForm.get('gender').value,
    //   addressDetails: {
    //     street: this.reactiveForm.get('address.street').value,
    //     country: this.reactiveForm.get('address.country').value,
    //     city: this.reactiveForm.get('address.city').value,
    //     region: this.reactiveForm.get('address.region').value,
    //     postal: this.reactiveForm.get('address.postal').value,
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience: this.reactiveForm.get('experience').value
    // })

    // this.reactiveForm.get('username').setValue(username) //todo   Directly accessing control
  

    //* Updating value using patchValue method 

    this.reactiveForm.patchValue({
      username:username,
      addressDetails:{
        city:'New Delhi'
      }
    })
    
}

} 

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

  }

  OnSubmitForm() {
    console.log(this.reactiveForm);
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

} 

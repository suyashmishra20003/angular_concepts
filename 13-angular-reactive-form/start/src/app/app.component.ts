import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'template-driven-form';
  reactiveForm:FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.email,Validators.required]), //* For multiple validators use []
      username:new FormControl(null),
      dob:new FormControl(null),
      gender:new FormControl('female'),
      addressDetails: new FormGroup({
        street:new FormControl(null,Validators.required),
        country:new FormControl('India',Validators.required),
        city:new FormControl(null,Validators.required),
        region:new FormControl(null),
        postal:new FormControl(null,Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required)
      ])
    })

  }
  
  OnSubmitForm(){
    console.log(this.reactiveForm);  
  }





} 

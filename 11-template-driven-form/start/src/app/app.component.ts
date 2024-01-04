import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  @ViewChild('resgisteredFormRef') form :NgForm;

  genders = [
    {id:'check-male', value:'male',label:'Male'},
    {id:'check-female', value:'female',label:'Female'},
    {id:'check-other', value:'other',label:'prefer not to say'},
  ]

  OnFormSubmitted() {
    console.log(this.form)
  }
}

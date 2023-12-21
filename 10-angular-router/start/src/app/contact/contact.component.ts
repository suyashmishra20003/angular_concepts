import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = ''
  lastName: string = ''
  country: string = 'usa'
  message: string = ''

  isSubmitted: boolean = false

  onSubmit() {
    this.isSubmitted = true
  }

  canExit() {
    if (this.firstName || this.lastName || this.message || this.isSubmitted) {
      return confirm('You have Unsved changes. Do you navigate away ?')
    } else {
      return false
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTitle = 'custom-directives';
  names:any = ['Suyash','Santosh','Shivam']
  isBtnDiasbled:boolean = true
  isifBlock:boolean = true
  tab:string = ''
}

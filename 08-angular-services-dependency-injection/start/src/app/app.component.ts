import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[SubscribeService] //* Now this instance of a service is available in all the components
  //* Above service is injected in app module 
})
export class AppComponent {
  title = 'angular-services-dependency-injection';
}

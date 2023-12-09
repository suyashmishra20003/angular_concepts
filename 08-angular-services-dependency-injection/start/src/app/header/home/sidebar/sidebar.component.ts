import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // providers:[SubscribeService] //* Hierarchical Injection as providers is used in parent(header component) the service instance is injected in all child components
})
export class SidebarComponent {
  constructor(private _subscribeService:SubscribeService){
  }

  onMonthlySubscribe(){
    this._subscribeService.onSubscribed('monthly')
  }
}

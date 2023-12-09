import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // providers:[SubscribeService] //* 2. What to provide // We will provie the service in root component
})
export class HeaderComponent {
  selectedTab: string = 'home';
  subService:any


  constructor( private  _subscribeService:SubscribeService){ //* 1. How to provide Dependency
    this.subService = _subscribeService
  }

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  //When Subscribe button is clicked
  onSubscribe(){

    // const service  = new SubscribeService()  //! This makes header component Tightly Coupled to SubscribeService which should be avoided 
    //* To avoid tight coupling use Dependency Injection (DI) to inject service instrance in header component 
    this.subService.onSubscribed('yearly')
  }
}

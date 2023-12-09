import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  // providers:[SubscribeService] //* Hierarchical Injection as providers is used in parent(header component) the service instance is injected in all child components

})
export class HeroComponent {
  constructor(private _subscribeService:SubscribeService){
  }

  onHeroSubscribeClicked(){
    this._subscribeService.onSubscribed('yearly')
  }

}

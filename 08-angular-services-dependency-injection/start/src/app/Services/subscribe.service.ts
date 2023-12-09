import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSubscribed(){
      alert('Thank You for subscribing. You can access the services now')
  }
}

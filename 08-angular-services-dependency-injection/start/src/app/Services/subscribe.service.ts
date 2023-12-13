import { Injectable } from '@angular/core';

@Injectable()  //* This is not mandatory because no  service is injeted inside subscribe service
export class SubscribeService {

  constructor() { }

  onSubscribed(string){
      alert(`Thank You for subscribing. You can access the ${string} services now`)
  }
}

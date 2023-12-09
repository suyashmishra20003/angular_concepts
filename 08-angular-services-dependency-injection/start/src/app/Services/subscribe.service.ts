import { Injectable } from '@angular/core';


export class SubscribeService {

  constructor() { }

  onSubscribed(string){
      alert(`Thank You for subscribing. You can access the ${string} services now`)
  }
}

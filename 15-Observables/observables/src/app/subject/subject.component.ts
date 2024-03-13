import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    //* Observable
    // let obs = new Observable(
    //   (observer) => {
    //     observer.next(Math.random())
    //   }
    // );

    
    
    // //? Observable 1
    // obs.subscribe(
      //   (data) => {
        //     console.log(data)
        //   }
        // )
    // //? Observable 2
    // obs.subscribe(
      //   (data) => {
    //     console.log(data)
    //   }
    // )

    // //* Subject
    
    const subject = new Subject()

    subject.next(Math.random())
    subject.next(Math.random()) // For Behaviour subject


    //? Subject 1

    subject.subscribe(
      (data) => {
        console.log(data) // Same value for subject
      }
    )

    //? Subject 2

    subject.subscribe(
      (data) => {
        console.log(data) // Same value for subject
      }
    )



  }

  btnHandler(){
    // const data = ajax('https://randomuser.me/api/')
    // const subject = new Subject()

    //? Behaviour subject
    
    // const subject = new BehaviorSubject<number>(100)
    
    
    //? Replay subject
    
    // const subject = new ReplaySubject<number>(3,1000)


    // const subject = new AsyncSubject<number>()

    // // subject.next(2020)
    
    // subject.next(100)
    // subject.next(200)
    // subject.next(300)
    // subject.subscribe((res)=>{
    //   console.log('SubA', res); 
      
    // })
    
    // console.log('-------------');
    
    // subject.subscribe((res)=>{
    //   console.log('SubB',res);  

    // })
    // console.log('-------------');
    
    // subject.subscribe((res)=>{
    //   console.log('SubC',res);  
    // })
    // console.log('-------------'); 

    //? Async subject

    const asyncSubject = new AsyncSubject<number>()

    // subject.next(2020)
    
    asyncSubject.next(100)
    asyncSubject.next(200)
    asyncSubject.next(300)
    asyncSubject.complete()
    asyncSubject.next(300)

    asyncSubject.subscribe((res)=>{
      console.log('SubA', res); 
      
    })
    
    console.log('-------------');
    
    asyncSubject.subscribe((res)=>{
      console.log('SubB',res);  

    })
    console.log('-------------');
    
    asyncSubject.subscribe((res)=>{
      console.log('SubC',res);  
    })
    console.log('-------------'); 
    // data.subscribe(subject)

  }

}

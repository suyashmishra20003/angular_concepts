import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit{
  ngAfterViewInit(): void {
    // this.buttonClicked()
  }

  @ViewChild('createButton') createButton:ElementRef 
  createBtnObservable:Observable<any> 
  title = 'observables';
  data: any[] = [];

  dataArr = ["Apple", "Orange", "Mango", "Banana", "Guava"]
  numArr = [1,2,3,4,5,6,7,8,9,10]
  //* Observable
  // myObservable:Observable<any> = new Observable((observer)=>{
    //* To emit some value we call next() method
    // observer.next(["Apple", "Orange", "Mango", "Banana", "Guava"]);

    //? Streamlining data
    // setTimeout(()=>{
    //   observer.next('Apple');
    // },1000)
    // setTimeout(()=>{
    //   observer.next('Orange');
    // },2000)
    // setTimeout(()=>{
    //   //* When an observable emits a value the observer will not emit any data after an error
    // observer.error(new Error('This is a self induced error'))
    // },3000)

    //* For Completion
    // setTimeout(()=>{
    //   observer.complete()
    // },3000)

    // setTimeout(()=>{
    // observer.next('Mango');

    // },4000)
    // setTimeout(()=>{
    // observer.next('Banana');
    // },5000)
    // setTimeout(()=>{
    // observer.next('Guava');
    // },6000)
  // })

  //* Observable using of() operator
  // myObservable = of(this.dataArr, this.numArr, "Hello", true, 'Suyash');

  //* Observable using from() operator
  //* Converting a Promise into observable using from()
  promiseData = new Promise((resolve, reject)=>{
    resolve(this.numArr)
  })
  // myObservable= from(this.promiseData);

  myObservable = from(this.numArr);
  //* Observable using map and filter operator (chaining of operators)
  transformObs = this.myObservable.pipe(
    map((item)=>{
      return item * 5;
    }),
    filter((item)=>{
      return item%2 === 0 
    })
  );
  // transformFilterObs = this.myObservable.pipe(filter((item)=>{
  //   return item%2 === 0 
  // }))

  clickHandler(){
    //* Observer
    //? takes 3 callback functions for different events: next, error, complete
    // this.myObservable.subscribe({
    //   next: (value)=>{
    //     this.data.push(value)
    //     console.log(value);
        
    //   },
    //   error: (error)=>{
    //     console.log(error)
    //   },
    //   complete: ()=>{
    //     console.log('Completed')
    //   }
    // })

    //* Using map operator
    this.transformObs.subscribe({
      next: (value)=>{
        this.data.push(value)
        console.log(value);
        
      },
      error: (error)=>{
        console.log(error)
      },
      complete: ()=>{
        console.log('Completed')
      }
    })
    //* Using filter operator
    // this.transformFilterObs.subscribe({
    //   next: (value)=>{
    //     this.data.push(value)
    //     console.log(value);
        
    //   },
    //   error: (error)=>{
    //     console.log(error)
    //   },
    //   complete: ()=>{
    //     console.log('Completed')
    //   }
    // })
  }

  ngOnDestroy(): void {
  }

  // buttonClicked(){
  //   this.createBtnObservable = fromEvent(this.createButton.nativeElement, 'click')

  //   this.createBtnObservable.subscribe((value)=>{
  //     console.log(value);
      
  //   })
  // }

  // showItem(){
  //   let div = document.createElement('div')
  //   div.innerText = 'Suyash'
  //   document.getElementsByClassName('parentDiv')[0].appendChild(div)
  // }
}

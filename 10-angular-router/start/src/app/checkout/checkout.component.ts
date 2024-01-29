import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  course:any

  constructor(private activeRoute : ActivatedRoute , private router:Router ) {}
  ngOnInit(): void {
    // this.activeRoute.data.subscribe((data)=>{
    // //* Passing static data without using query params or route params
    //   this.course  = data
    // })

    // this.course =  this.router.getCurrentNavigation().extras.state

    this.course = history.state
  }
}
